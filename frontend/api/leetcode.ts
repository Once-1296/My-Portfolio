// File: /api/leetcode.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios, { isAxiosError } from 'axios';

// --- Define Types for the LeetCode Response ---
// This helps us type-check the data we get back from LeetCode

interface AcSubmissionNum {
  difficulty: 'All' | 'Easy' | 'Medium' | 'Hard';
  count: number;
}

// This matches the shape of the successful data object
interface LeetCodeData {
  matchedUser: {
    username: string;
    submitStatsGlobal: {
      acSubmissionNum: AcSubmissionNum[];
    };
  };
  userContestRanking: {
    rating: number | null; // Rating can be null
    globalRanking: number,
    totalParticipants: number,
    topPercentage: number,
    badge:{
    name:string,
    },
  } | null; // The whole ranking object can be null
}

// This is the full response from the GraphQL endpoint
interface LeetCodeGraphQLResponse {
  data: LeetCodeData;
  errors?: Array<{ message: string }>; // Optional errors array
}
// --- simple in-memory cache ---
let cachedData: { timestamp: number; data: LeetCodeGraphQLResponse } | null = null;
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours in ms

// --- The Serverless Function ---

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  // 🔹 1. Return cached data if still valid
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
    return res.status(200).json({ ...cachedData.data, cached: true });
  }
  // 2. Define the GraphQL query
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      userContestRanking(username: $username) {
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge{
        name
        }
      }
    }
  `;

  // 3. Get the username from your frontend's request body (more flexible)
  // Or keep it hard-coded if you prefer.
  const username = req.body.username || 'Awwabcoder23';

  // 4. Make the proxy request to LeetCode
  try {
    const { data } = await axios.post<LeetCodeGraphQLResponse>(
      'https://leetcode.com/graphql',
      {
        query,
        variables: { username },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Referer': 'https://leetcode.com/', // Add referer just in case
        },
      }
    );

    // 5. Check for GraphQL errors (e.g., user not found)
    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      return res
        .status(400)
        .json({ message: 'GraphQL error', details: data.errors });
    }

    // 🔹 2. Store in cache
    cachedData = { timestamp: Date.now(), data: data };
    // 6. Success: Send the data back to your frontend
    res.status(200).json(data);
    
  } catch (err) {
    // 7. Handle network/axios errors
    console.error('Error in LeetCode proxy:', err);
    if (isAxiosError(err)) {
      res.status(err.response?.status || 500).json({
        message: 'Error fetching from LeetCode',
        details: err.response?.data,
      });
    } else {
      res
        .status(500)
        .json({ message: 'An unknown server error occurred' });
    }
  }
}