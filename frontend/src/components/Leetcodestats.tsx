// In your React component file (e.g., LeetCodeStats.tsx)

import { useState, useEffect } from 'react';
import axios, { isAxiosError } from 'axios';

// --- Re-use or import the types ---
// (Ideally, share these from a common /src/types.ts file)

interface AcSubmissionNum {
  difficulty: 'All' | 'Easy' | 'Medium' | 'Hard';
  count: number;
}

interface LeetCodeData {
  matchedUser: {
    submitStatsGlobal: {
      acSubmissionNum: AcSubmissionNum[];
    };
  };
  userContestRanking: {
    rating: number ;
  }
}

// This is the shape of the data *your* API /api/leetcode sends back
interface ApiResponse {
  data: LeetCodeData;
}

// --- This is the shape of the state you want to store ---
interface SolvedStats {
  All: number;
  Easy: number;
  Medium: number;
  Hard: number;
  [key: string]: number; // Index signature for safety
}

interface ProcessedStats {
  solved: SolvedStats;
  rating: number;
}

// --- Your Component ---

const LeetCodeStatsComponent = () => {
  // State for your processed data
  const [stats, setStats] = useState<ProcessedStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Call your *own* proxy endpoint
        const res = await axios.post<ApiResponse>(
          '/api/leetcode',
          {
            // You can send the username to your API
            username: 'Awwabcoder23',
          }
        );

        // 2. Get the data from the response
        const apiData = res.data.data;
        const ranking = apiData.userContestRanking;

        // 3. Process the data with proper typing (no 'any'!)
        const solved =
          apiData.matchedUser.submitStatsGlobal.acSubmissionNum.reduce(
            (acc, item) => {
              // Now `item.difficulty` is correctly typed
              acc[item.difficulty] = item.count;
              return acc;
            },
            {} as SolvedStats // Type the initial value
          );

        // 4. Set the final, processed state
        setStats({
          solved,
          rating:Math.round(ranking.rating),
        });

      } catch (err) {
        console.error('❌ Error fetching LeetCode stats:', err);
        if (isAxiosError(err)) {
          setError(err.response?.data?.message || 'Failed to fetch data');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []); // Runs once on component mount

  // --- Render your component ---
  if (loading) {
    return <div>Loading LeetCode Stats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stats) {
    return null;
  }

  return (
    <div>
      <h3>LeetCode Stats</h3>
      <p>Rating: {stats.rating}</p>
      <ul>
        <li>Easy: {stats.solved.Easy || 0}</li>
        <li>Medium: {stats.solved.Medium || 0}</li>
        <li>Hard: {stats.solved.Hard || 0}</li>
        <li>Total: {stats.solved.All || 0}</li>
      </ul>
    </div>
  );
};

export default LeetCodeStatsComponent;