import React from "react";
import AboutSection from "../components/AboutSection";

const About: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
       <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Background</h3>
          <p>
            I’m a 19 year old software student, tech and mathematics enthusiast living in Mumbai👋🏻.
            My interest primarily lies creating something fun and easy to use
             and also in solving tricky problems by finding patterns and hidden clues to rigorously find a solutions
             that leaves no loose ends. 
          </p>
        </div>
<div className="relative before:content-[''] before:absolute before:left-2 before:top-0 before:w-0.5 before:h-full before:bg-gray-300 pl-6">
       <section id="education" className="py-8">
  <h3 className="text-2xl font-semibold mb-6">Education</h3>
  <div className="space-y-6 text-gray-700">
    {/* 10th Std */}
    <div className="border-l-4 border-blue-600 pl-4">
      <h4 className="text-lg font-bold">10<sup>th</sup> SSC Board</h4>
      <p>St. Mary’s High School SSC, Mazgaon, Mumbai - 10</p>
      <p className="text-sm italic">Maharashtra Pune Board</p>
      <p className="mt-1">Passed with <span className="font-semibold">94%</span> — <span className="text-gray-600">July 2022</span></p>
    </div>

    {/* 12th Std */}
    <div className="border-l-4 border-green-600 pl-4">
      <h4 className="text-lg font-bold">12<sup>th</sup> HSC Science</h4>
      <p>Wilson College, Chowpatty, Mumbai - 07</p>
      <p className="text-sm italic">Maharashtra HSC Board</p>
      <p className="mt-1">Passed with <span className="font-semibold">93.5%</span> — <span className="text-gray-600">July 2024</span></p>
      <p className="text-sm text-gray-500">(Academic years 2022 – 2024)</p>
    </div>

    {/* University */}
    <div className="border-l-4 border-purple-600 pl-4">
      <h4 className="text-lg font-bold">Bachelor of Technology in IT</h4>
      <p>Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai - 19</p>
      <p className="text-sm italic">Second Year Ongoing — <span className="text-gray-600">September 2024 – Present</span></p>
      <p className="mt-1">First Year CGPA: <span className="font-semibold">9.65</span></p>
    </div>
  </div>
</section>
</div>
        <div>
          <h3 className="text-xl font-bold mb-2">Hobbies</h3>
          <p>

          Aside from techinal and academic studies, I like to read about scientific and programming blogs,
          specifically recent advancements in the fields of mathematics and physics. 
          I play video games often in my free time, (kinda my inspiration for Game development😆).
          I also follow sports among Football, Cricket and F1.
          </p>
        </div>
      </div>
      <AboutSection />
    </main>
  );
};

export default About;
