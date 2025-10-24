import React from "react";

const Achievements: React.FC = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Achievements
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Certificates */}
        <div className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
            Certificates
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
            <li>3rd Highest Scorer in School</li>
            <li>
              Highest Marks in Physics and Chemistry in 12th Science in Wilson
              College
            </li>
            <li>MHTCET Rank 153 : 99.94% ile</li>
            <li>JEE Mains 97.6 %ile</li>
            <li>JEE Advanced: 14908 Rank</li>
          </ul>
        </div>

        {/* Competitions */}
        <div className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
            Competition Wins
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
            <li>
              <b>2nd</b> Rank in KJSSE's Codespree 2025
            </li>
            <li>
              <b>1st</b> FY in Codeverse Grid of Doom Contest, organised by
              Community of Coders, VJTI.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
