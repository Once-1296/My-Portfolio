import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gray-100 text-gray-800">
      <h2 id = "about_head" className="text-2xl sm:text-3xl font-semibold mb-8 text-center">About Me😎</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Background */}
        <div id="about_bg" className ="about">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Background</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            I’m a 19-year-old <b>software student, tech</b> and <b>mathematics enthusiast</b> living in <b>Mumbai👋🏻</b>.
            My interest primarily lies in creating something <b>fun</b> and <b>easy to use</b> and also in solving <b>tricky problems🧠</b>
            by finding <b>patterns🧩</b> and <b>hidden clues🔍</b> to rigorously find <b>solutions🔑</b> that leave <b>no loose ends</b>.
          </p>
        </div>

        {/* Education */}
        <div id="about_tm" className="about">
        <div className="relative before:content-[''] before:absolute before:left-2 before:top-0 before:w-0.5 before:h-full before:bg-gray-300 pl-6">
          <section id="education" className="py-4 sm:py-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Education</h3>

            <div className="space-y-6 text-gray-700 text-sm sm:text-base">
              {/* 10th Std */}
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold">10<sup>th</sup> SSC Board</h4>
                <p>St. Mary’s High School SSC, Mazgaon, Mumbai - 10</p>
                <p className="italic">Maharashtra Pune Board</p>
                <p className="mt-1">
                  Passed with <span className="font-semibold">94%</span> —{" "}
                  <span className="text-gray-600">July 2022</span>
                </p>
              </div>

              {/* 12th Std */}
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold">12<sup>th</sup> HSC Science</h4>
                <p>Wilson College, Chowpatty, Mumbai - 07</p>
                <p className="italic">Maharashtra HSC Board</p>
                <p className="mt-1">
                  Passed with <span className="font-semibold">93.5%</span> —{" "}
                  <span className="text-gray-600">July 2024</span>
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">(Academic years 2022 – 2024)</p>
              </div>

              {/* University */}
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold">Bachelor of Technology in IT</h4>
                <p>Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai - 19</p>
                <p className="italic">
                  Second Year Ongoing — <span className="text-gray-600">Sept 2024 – Present</span>
                </p>
                <p className="mt-1">
                  First Year CGPA: <span className="font-semibold">9.65</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
        {/* Hobbies */}
        <div id="about_hb" className="about">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Hobbies</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            Aside from technical and academic studies, I like to read scientific and programming blogs📑,
            specifically about recent advancements in mathematics and physics.
            I play <b>video games🎮</b> in my free time (kind of my inspiration for Game Development 😆),
            and I also follow <b>Football⚽, Cricket🏏,</b> and <b>F1🏎️</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
