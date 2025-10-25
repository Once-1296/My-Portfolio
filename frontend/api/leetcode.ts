// File: /api/leetcode.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios, { isAxiosError } from 'axios';

// --- Types ---
interface AcSubmissionNum {
  difficulty: 'All' | 'Easy' | 'Medium' | 'Hard';
  count: number;
}

interface LeetCodeData {
  matchedUser: {
    username: string;
    submitStatsGlobal: {
      acSubmissionNum: AcSubmissionNum[];
    };
  };
  userContestRanking: {
    rating: number | null;
    globalRanking: number;
    totalParticipants: number;
    topPercentage: number;
    badge: {
      name: string;
    };
  } | null;
}

interface LeetCodeGraphQLResponse {
  data: LeetCodeData;
  errors?: Array<{ message: string }>;
}

// --- In-memory cache ---
let cachedData: { timestamp: number; data: LeetCodeData } | null = null;
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

// --- Handler ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // ✅ Return cached data if still valid
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
    console.log('✅ Using cached LeetCode data');
    return res.status(200).json({ data: cachedData.data, cached: true });
  }

  console.log('🌐 Fetching fresh LeetCode data...');
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
        badge {
          name
        }
      }
    }
  `;

  const username = req.body.username || 'Awwabcoder23';

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
          Referer: 'https://leetcode.com/',
        },
      }
    );

    // Handle GraphQL errors
    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      return res.status(400).json({ message: 'GraphQL error', details: data.errors });
    }

    // ✅ Store the cleaned data (not the wrapper) in cache
    cachedData = { timestamp: Date.now(), data: data.data };

    // ✅ Return the correct shape expected by frontend
    return res.status(200).json({ data: data.data, cached: false });

  } catch (err) {
    console.error('❌ Error fetching LeetCode data:', err);
    if (isAxiosError(err)) {
      return res.status(err.response?.status || 500).json({
        message: 'Error fetching from LeetCode',
        details: err.response?.data,
      });
    }
    return res.status(500).json({ message: 'An unknown server error occurred' });
  }
}
