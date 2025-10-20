import React from "react";

const Skills: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      {/* Technical Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>HTML, CSS, JavaScript</li>
            <li>Python: numpy, flask,opencv</li>
            <li>C, C++, SFML </li>
            <li>C#, Unity</li>
        </ul>
      </section>
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
        <div id="coding-stats" className="bg-gray-50 p-4 rounded-lg shadow">
          <p className="text-gray-600">LeetCode Stats: (auto-updated)</p>
          <div className="flex gap-4 mt-3">
            <div>Easy: --</div>
            <div>Medium: --</div>
            <div>Hard: --</div>
          </div>
          <p className="mt-3">Current Rating: LeetCode -- | Codeforces --</p>
        </div>
      </section>
    </main>
  );
};

export default Skills;
