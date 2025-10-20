import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>Python: numpy, flask,opencv</li>
            <li>C, C++, SFML </li>
            <li>C#, Unity</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Professional Knowledge</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Project Management</li>
            <li>Team Collaboration</li>
            <li>Communication & Leadership</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Coding Stats</h3>
        <div className="flex flex-col items-center space-y-2">
          <p>LeetCode: 300 solved (Easy: 150, Medium: 120, Hard: 30)</p>
          <p>LeetCode Rating: <span className="font-semibold">1933</span></p>
          <p>Codeforces Rating: <span className="font-semibold">1471</span></p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
