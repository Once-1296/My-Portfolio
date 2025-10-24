// File: src/components/LeetCodeStats.tsx

import { useState, useEffect } from "react";
import axios, { isAxiosError } from "axios";

// --- Type Definitions ---
interface AcSubmissionNum {
  difficulty: "All" | "Easy" | "Medium" | "Hard";
  count: number;
}

interface ContestRanking {
  globalRanking: number | null;
  totalParticipants: number | null;
}

interface LeetCodeData {
  matchedUser: {
    submitStatsGlobal: {
      acSubmissionNum: AcSubmissionNum[];
    };
  };
  userContestRanking: {
    rating: number | null;
    contestRanking: ContestRanking;
  } | null;
}

interface ApiResponse {
  data: LeetCodeData;
}

interface SolvedStats {
  All: number;
  Easy: number;
  Medium: number;
  Hard: number;
  [key: string]: number;
}

interface ProcessedStats {
  solved: SolvedStats;
  rating: number | null;
  percentile: number | null;
}

// --- Component ---
const LeetCodeStatsComponent = () => {
  const [stats, setStats] = useState<ProcessedStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setLoading(true);
      setError(null);
      try {
        // ✅ Call your own Vercel API route
        const res = await axios.post<ApiResponse>("/api/leetcode", {
          username: "Awwabcoder23",
        });

        const apiData = res.data.data;
        const ranking = apiData.userContestRanking;

        // Compute solved problems
        const solved = apiData.matchedUser.submitStatsGlobal.acSubmissionNum.reduce(
          (acc, item) => {
            acc[item.difficulty] = item.count;
            return acc;
          },
          {} as SolvedStats
        );

        // ✅ Compute percentile (if data exists)
        let percentile: number | null = null;
        if (
          ranking?.contestRanking?.globalRanking != null &&
          ranking?.contestRanking?.totalParticipants != null &&
          ranking.contestRanking.totalParticipants > 0
        ) {
          percentile =
            ((ranking.contestRanking.totalParticipants -
              ranking.contestRanking.globalRanking) /
              ranking.contestRanking.totalParticipants) *
            100;
          percentile = parseFloat(percentile.toFixed(3));
        }

        setStats({
          solved,
          rating: ranking?.rating || null,
          percentile,
        });
      } catch (err) {
        console.error("❌ Error fetching LeetCode stats:", err);
        if (isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to fetch data");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) return <div>Loading LeetCode Stats...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stats) return null;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
        🧠 LeetCode Stats
      </h3>
      <ul className="space-y-2 text-lg">
        <li>
          <strong>Rating:</strong>{" "}
          {stats.rating !== null ? stats.rating : "N/A"}
        </li>
        <li>
          <strong>Percentile:</strong>{" "}
          {stats.percentile !== null ? `${stats.percentile}%` : "N/A"}
        </li>
        <li>
          <strong>Total Solved:</strong> {stats.solved.All || 0}
        </li>
        <li>
          Easy: {stats.solved.Easy || 0} | Medium: {stats.solved.Medium || 0} |
          Hard: {stats.solved.Hard || 0}
        </li>
      </ul>
    </div>
  );
};

export default LeetCodeStatsComponent;
