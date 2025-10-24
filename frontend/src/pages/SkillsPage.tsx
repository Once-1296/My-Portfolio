import React, { useEffect, useState } from "react";
import axios from "axios";
import LeetCodeStatsComponent from "../components/Leetcodestats";

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
  maxRank?: string
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
          maxRank:user.maxRank,
        };
      } catch (err) {
        console.error("❌ Error fetching Codeforces stats:", err);
        return null;
      }
    };

    const fetchStats = async () => {
      setLoading(true);
      const [lc, cf] = await Promise.all([
        fetchLeetCodeStats(),
        fetchCodeforcesStats(),
      ]);
      setLcStats(lc);
      setCfStats(cf);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Skills
      </h2>

      {/* Technical Skills */}
      <section className="mb-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Technical Skills
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>HTML, CSS, JavaScript</li>
          <li>Python: numpy, flask, opencv</li>
          <li>C, C++, SFML</li>
          <li>C#, Unity</li>
        </ul>
      </section>

      {/* Professional Knowledge */}
      <section className="mb-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Professional Knowledge
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Project Management</li>
          <li>Team Collaboration</li>
          <li>Communication & Leadership</li>
        </ul>
      </section>

      {/* Coding Profiles */}
      <section className="border-t border-gray-300 pt-6 mt-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Coding Profiles
        </h3>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          {loading ? (
            <p className="text-gray-500 text-sm sm:text-base">
              Loading stats...
            </p>
          ) : (
            <>
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 mb-2">LeetCode</h4>
                {lcStats ? (
                  <div>
                    <LeetCodeStatsComponent />
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      Rating: {lcStats.rating}
                    </p>
                  </div>
                ) : (
                  <p className="text-red-500 text-sm">
                    Failed to load LeetCode stats
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">Codeforces</h4>
                {cfStats ? (
                  <p className="text-sm sm:text-base text-gray-600">
                    Rating: {cfStats.rating} | Max: {cfStats.maxRating} | Rank:{" "}
                    {cfStats.rank} | Max. Rank:{" "}{cfStats.maxRank}
                  </p>
                ) : (
                  <p className="text-red-500 text-sm">
                    Failed to load Codeforces stats
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Skills;
