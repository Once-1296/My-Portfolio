import React from "react";

const Home: React.FC = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-black text-white px-4 sm:px-6 md:px-10"
    >
      <h1
        id="hometext"
        className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-extrabold mb-4 leading-tight"
      >
        Hi, I’m Awwab Wadekar (●'◡'●)
      </h1>

      <p
        id="hometext"
        className="text-base sm:text-lg md:text-xl text-blue-400 max-w-2xl"
      >
        Welcome to my portfolio! I’m a sophomore at Veermata Jijabai Technological Institute, Mumbai.
        I’m proficient in C++, Python, and C# with an interest in Competitive Programming and Data Structures & Algorithms,
        and passionate about building efficient solutions and solving challenging problems.
      </p>
    </section>
  );
};

export default Home;
