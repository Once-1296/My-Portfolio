
   
import React, { useEffect, useState } from "react";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface CodeforcesData {
  rating: number;
  rank: string;
  maxRating: number;
  maxRank: string;
}

const SkillsPage: React.FC = () => {
  const [leetcode, setLeetcode] = useState<LeetCodeData | null>(null);
  const [codeforces, setCodeforces] = useState<CodeforcesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 🟩 Use relative paths so it works in localhost & production (Vercel)
        const [lcRes, cfRes] = await Promise.all([
          fetch("/api/leetcode/Awwabcoder23"),
          fetch("/api/codeforces/Awwab_coder123"),
        ]);

        if (!lcRes.ok || !cfRes.ok) throw new Error("API request failed");

        const lcData = await lcRes.json();
        const cfData = await cfRes.json();

        setLeetcode(lcData);
        setCodeforces(cfData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load coding stats.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Coding Profiles</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 🟧 LeetCode Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            LeetCode
          </h2>
          {leetcode ? (
            <ul className="space-y-2">
              <li>Total Solved: {leetcode.totalSolved}</li>
              <li>Easy: {leetcode.easySolved}</li>
              <li>Medium: {leetcode.mediumSolved}</li>
              <li>Hard: {leetcode.hardSolved}</li>
            </ul>
          ) : (
            <p>Unable to load data</p>
          )}
          <a
            href="https://leetcode.com/Awwabcoder23/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-yellow-400 hover:text-yellow-300"
          >
            View Profile →
          </a>
        </div>

        {/* 🟦 Codeforces Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Codeforces
          </h2>
          {codeforces ? (
            <ul className="space-y-2">
              <li>Rating: {codeforces.rating}</li>
              <li>Rank: {codeforces.rank}</li>
              <li>Max Rating: {codeforces.maxRating}</li>
              <li>Max Rank: {codeforces.maxRank}</li>
            </ul>
          ) : (
            <p>Unable to load data</p>
          )}
          <a
            href="https://codeforces.com/profile/Awwab_coder123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300"
          >
            View Profile →
          </a>
        </div>
      </div>
    </div>
    </main>
  );
};

export default SkillsPage;
