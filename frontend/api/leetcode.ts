// File: /api/leetcode.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios, { isAxiosError } from "axios";

interface AcSubmissionNum {
  difficulty: "All" | "Easy" | "Medium" | "Hard";
  count: number;
}

interface MatchedUser {
  username: string;
  submitStatsGlobal: {
    acSubmissionNum: AcSubmissionNum[];
  };
}

interface ContestRanking {
  globalRanking: number | null;
  totalParticipants: number | null;
}

interface UserContestRanking {
  rating: number | null;
  contestRanking: ContestRanking | null;
}

interface GraphQLResponseData {
  matchedUser?: MatchedUser | null;
  userContestRanking?: UserContestRanking | null;
}

interface GraphQLResponse {
  data?: GraphQLResponseData;
  errors?: Array<{ message: string }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed. Use POST." });
  }

  const username = (req.body && req.body.username) || "Awwabcoder23";

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
        contestRanking {
          globalRanking
          totalParticipants
        }
      }
    }
  `;

  try {
    const response = await axios.post<GraphQLResponse>(
      "https://leetcode.com/graphql",
      { query, variables: { username } },
      {
        headers: {
          "Content-Type": "application/json",
          // polite browser-like headers to reduce chances of being blocked
          Referer: "https://leetcode.com/",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
        },
        timeout: 10_000,
      }
    );

    const data = response.data;

    if (!data) {
      return res.status(502).json({ error: "Empty response from LeetCode" });
    }

    if (data.errors && data.errors.length > 0) {
      return res.status(400).json({ error: "GraphQL error", details: data.errors });
    }

    const d = data.data;
    if (!d || !d.matchedUser) {
      return res.status(404).json({ error: "User not found or no matchedUser returned" });
    }

    // extract solved stats into object with normalized keys
    const acList = d.matchedUser.submitStatsGlobal?.acSubmissionNum || [];
    const solved = acList.reduce<Record<string, number>>((acc, item) => {
      const key = item.difficulty || "All";
      acc[key] = item.count ?? 0;
      return acc;
    }, { All: 0, Easy: 0, Medium: 0, Hard: 0 });

    const ranking = d.userContestRanking || null;
    const rating = ranking?.rating ?? null;
    const contestRanking = ranking?.contestRanking ?? null;

    // Return a clean, small payload
    const payload = {
      username: d.matchedUser.username,
      solved: {
        all: solved.All ?? 0,
        easy: solved.Easy ?? 0,
        medium: solved.Medium ?? 0,
        hard: solved.Hard ?? 0,
      },
      rating: rating === null ? null : Math.round(rating),
      contestRanking: {
        globalRanking: contestRanking?.globalRanking ?? null,
        totalParticipants: contestRanking?.totalParticipants ?? null,
      },
    };

    // Cache for 1 hour on Vercel edge (adjust as needed)
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=60");
    return res.status(200).json(payload);
  } catch (err) {
    console.error("LeetCode proxy error:", err);

    if (isAxiosError(err)) {
      const status = err.response?.status || 502;
      return res.status(status).json({
        error: "Failed to fetch from LeetCode",
        details: err.response?.data ?? err.message,
      });
    }

    return res.status(500).json({ error: "Internal server error", details: String(err) });
  }
}
