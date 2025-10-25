import React, { useEffect, useState } from "react";
import axios from "axios";
import LeetCodeStatsComponent from "../components/Leetcodestats";

interface CFStats {
  rating: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string
}

const Skills: React.FC = () => {
  const [cfStats, setCfStats] = useState<CFStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCodeforcesStats = async () => {
const CACHE_KEY = "cfStatsCache";
  const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

  // Check localStorage cache
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      console.log("✅ Using cached Codeforces data");
      return data;
    }
  }
  console.log("Fetching from Codeforces api...");
      try {
        const res = await fetch(
          "https://codeforces.com/api/user.info?handles=Awwab_coder123"
        );
        const data = await res.json();
        const user = data.result[0];
      const cf = {
      rating: user.rating,
      maxRating: user.maxRating,
      rank: user.rank,
      maxRank: user.maxRank,
    };
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: cf }));
    return cf;
      } catch (err) {
        console.error("❌ Error fetching Codeforces stats:", err);
        return null;
      }
    };

    const fetchStats = async () => {
      setLoading(true);
      const [cf] = await Promise.all([
        fetchCodeforcesStats(),
      ]);
      setCfStats(cf);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-12">
      <h2 id ="skill_head"className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Skills💪🏻
      </h2>

      {/* Technical Skills */}
      <section className="mb-10">
        <div id ="skill_1" className="skill">
         <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Technical Skills
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Basic Web Development : HTML, CSS, JavaScript</li>
          <li>Programming Languages: Python, C, C++, C#</li>
          <li>Data Analysis Libraries : numpy, pandas, matplotlib</li>
          <li>Backend : Flask</li>
          <li>Database : MySQL</li>
          <li>Development tools : Git, Github, Jupyter, Visual Studio, VS Code</li>
          <li>Graphics Library : opencv, SFML</li>
          <li>Game Engine : Unity</li>
        </ul>
      </div>
      </div>
      </section>

      {/* Professional Knowledge */}
      <section className="mb-10">
         <div id ="skill_2" className="skill">
       <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Professional Knowledge
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Project Management</li>
          <li>Team Collaboration</li>
          <li>Effective Communication & Leadership</li>
          <li>Disciplined Nature</li>
          <li>Deadline Handling</li>
          <li>Damage Control</li>
        </ul>
      </div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section className="border-t border-gray-300 pt-6 mt-8">
         <div id ="skill_3" className="skill">
        <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Competitive Programming Profiles
        </h3>

          {loading ? (
            <p className="text-gray-500 text-sm sm:text-base">
              Loading stats...
            </p>
          ) : (
            <>
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 text-lg mb-2"><a href="https://leetcode.com/u/Awwabcoder23/" target="_blank">LeetCode🔗</a></h4>
                    <LeetCodeStatsComponent />      
              </div>

              <div>
                <h4 className="font-bold text-gray-700 text-lg mb-2"><a href="https://codeforces.com/profile/Awwab_coder123" target="_blank">Codeforces🔗</a></h4>
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
        </div>
      </section>
    </main>
  );
};

export default Skills;
