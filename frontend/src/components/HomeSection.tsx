import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <h1 className="text-5xl  text-blue-600 font-extrabold mb-4">Hi, I’m Awwab Wadekar(●'◡'●)</h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        Welcome to my portfolio! I’m a sophomore of Veermata Jijabai Technological Institute,Mumbai.
    I’m proficient in C++,Python and C# with an interest for Competitive Programming and Data Structures and Algorithms,
    and passionate about building efficient solutions and solving challenging problems.
      </p>
    </section>
  );
};

export default HomeSection;
