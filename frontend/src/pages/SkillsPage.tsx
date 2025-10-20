// frontend/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from "react";

interface LCStats {
  solved:{
    all: number,
     easy: number;
  medium: number;
  hard: number;
  }
  rating: number|string;
}

interface CFStats {
  rating: number;
  maxRating: number;
  rank: string;
}

const Skills: React.FC = () => {
  const [lcStats, setLcStats] = useState<LCStats | null>(null);
  const [cfStats, setCfStats] = useState<CFStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [lcRes, cfRes] = await Promise.all([
// LeetCode fetch
fetch("https://my-portfolio-ngxvjh46r-awwab-wadekars-projects.vercel.app/api/leetcode/Awwabcoder23"),

// Codeforces fetch
fetch("https://my-portfolio-ngxvjh46r-awwab-wadekars-projects.vercel.app/api/codeforces/Awwab_coder123"),
          //fetch("http://localhost:5000/api/leetcode/Awwabcoder23"),
          //fetch("http://localhost:5000/api/codeforces/Awwab_coder123"),
        ]);

        const lcData = await lcRes.json();
        const cfData = await cfRes.json();

        setLcStats(lcData);
        setCfStats(cfData);
      } catch (err) {
        console.error("Error fetching coding stats:", err);
      } finally {
        setLoading(false);
      }
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
                <div className="flex gap-4 mb-3">
                  <p>
                    Rating: {lcStats.rating} 
                  </p>
                  <div>All: {lcStats.solved.all}</div>
                  <div>Easy: {lcStats.solved.easy}</div>
                  <div>Medium: {lcStats.solved.medium}</div>
                  <div>Hard: {lcStats.solved.hard}</div>
                </div>
              ) : (
                <p className="text-red-500">Failed to load LeetCode stats</p>
              )}

              <p className="text-gray-600 mb-3">Codeforces Stats</p>
              {cfStats ? (
                <div>
                  <p>
                    Rating: {cfStats.rating} | Max: {cfStats.maxRating} | Rank:{" "}
                    {cfStats.rank}
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
