import React from "react";

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">Achievements</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">Certificates</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>3rd Highest Scorer in School</li>
            <li>Highest Marks in Physics and Chemistry in 12th Science in Wilson College</li>
            <li>MHTCET Rank 153 : 99.94% ile</li>
            <li>JEE Mains 97.6 %ile</li>
            <li>JEE Advanced: 14908 Rank</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Competition Wins</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>2nd</b> Rank in KJSSE's Codespree 2025</li>
            <li><b>1st</b> FY in Codeverse Grid of Doom Contest, organised by Community of Coders, VJTI.</li>
          </ul>                     
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
