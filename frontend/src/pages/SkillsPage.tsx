// frontend/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface LCStats {
  solved: {
    All: number;
    Easy: number;
    Medium: number;
    Hard: number;
  };
  rating: number;
}

interface CFStats {
  rating: number;
  maxRating?: number;
  rank?: string;
}

const Skills: React.FC = () => {
  const [lcStats, setLcStats] = useState<LCStats | null>(null);
  const [cfStats, setCfStats] = useState<CFStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
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
            userContestRanking {
              rating
            }
        }
      `;
      try {
        const res = await axios.post("https://leetcode.com/graphql", {
          query,
          variables: { username: "Awwabcoder23" },
        });
        const data = res.data.data.matchedUser;
        const solved = data.submitStatsGlobal.acSubmissionNum.reduce(
          (acc: any, item: any) => {
            acc[item.difficulty] = item.count;
            return acc;
          },
          {}
        );
        return {
          solved,
          rating: res.data.data.userContestRanking?.rating || 0,
        };
      } catch (err) {
        console.error("❌ Error fetching LeetCode stats:", err);
        return null;
      }
    };

    const fetchCodeforcesStats = async () => {
      try {
        const res = await fetch(
          "https://codeforces.com/api/user.info?handles=Awwab_coder123"
        );
        const data = await res.json();
        const user = data.result[0];
        return {
          rating: user.rating,
          maxRating: user.maxRating,
          rank: user.rank,
        };
      } catch (err) {
        console.error("❌ Error fetching Codeforces stats:", err);
        return null;
      }
    };

    const fetchStats = async () => {
      setLoading(true);
      const [lc, cf] = await Promise.all([fetchLeetCodeStats(), fetchCodeforcesStats()]);
      setLcStats(lc);
      setCfStats(cf);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      {/* Technical Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>HTML, CSS, JavaScript</li>
          <li>Python: numpy, flask, opencv</li>
          <li>C, C++, SFML</li>
          <li>C#, Unity</li>
        </ul>
      </section>

      {/* Professional Knowledge */}
      <section className="mb-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">Professional Knowledge</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Project Management</li>
            <li>Team Collaboration</li>
            <li>Communication & Leadership</li>
          </ul>
        </div>
      </section>

      {/* LeetCode + Codeforces Section */}
      <section className="border-t border-gray-300 pt-6">
        <h3 className="text-xl font-semibold mb-4">Coding Profiles</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          {loading ? (
            <p className="text-gray-500">Loading stats...</p>
          ) : (
            <>
              <p className="text-gray-600 mb-3">LeetCode Stats</p>
              {lcStats ? (
                <div className="flex flex-col gap-2 mb-3">
                  <p>Rating: {lcStats.rating}</p>
                  <div>All: {lcStats.solved.All}</div>
                  <div>Easy: {lcStats.solved.Easy}</div>
                  <div>Medium: {lcStats.solved.Medium}</div>
                  <div>Hard: {lcStats.solved.Hard}</div>
                </div>
              ) : (
                <p className="text-red-500">Failed to load LeetCode stats</p>
              )}

              <p className="text-gray-600 mb-3">Codeforces Stats</p>
              {cfStats ? (
                <div>
                  <p>
                    Rating: {cfStats.rating} | Max: {cfStats.maxRating} | Rank: {cfStats.rank}
                  </p>
                </div>
              ) : (
                <p className="text-red-500">Failed to load Codeforces stats</p>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Skills;
