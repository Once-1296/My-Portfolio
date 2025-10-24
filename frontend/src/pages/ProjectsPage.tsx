import React from "react";

const Projects: React.FC = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
        {/* Train Your Foes */}
        <div className="p-4 sm:p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            TRAIN YOUR FOES
          </h3>

          <div className="space-y-2 mb-3">
            <img
              src="/assets/TYF1.png"
              alt="Game Screenshot"
              className="rounded-lg w-full object-cover"
            />
            <img
              src="/assets/TYF2.jpeg"
              alt="Game Screenshot"
              className="rounded-lg w-full object-cover"
            />
          </div>

          <div className="space-y-2 text-sm sm:text-base">
            <a
              target="_blank"
              href="https://github.com/AvanishSalunke/TRAIN-YOUR-FOES"
              className="underline text-blue-600"
            >
              Repository
            </a>
            <hr />
            <a
              target="_blank"
              href="https://avanishsalunke.github.io/TRAIN-YOUR-FOES/"
              className="underline text-blue-600"
            >
              Documentation Site
            </a>
          </div>

          <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
            This Project was made in collaboration with
            <a
              target="_blank"
              href="https://github.com/AvanishSalunke"
              className="underline"
            >
              {" "}
              Avanish Salunke
            </a>{" "}
            and
            <a
              target="_blank"
              href="https://github.com/AsparkArcane"
              className="underline"
            >
              {" "}
              Nathan Dsouza
            </a>{" "}
            under the guidance of our VJTI seniors
            <a
              target="_blank"
              href="https://github.com/Abhay-Varnekar"
              className="underline"
            >
              {" "}
              Abhay Varnekar
            </a>{" "}
            and
            <a
              target="_blank"
              href="https://github.com/Ishaan0132"
              className="underline"
            >
              {" "}
              Ishaan Shaikh
            </a>
            . Train Your Foes is a cyber-horror themed adaptive AI platformer
            that learns from your gameplay to create an intelligent, evolving
            opponent.
          </p>
        </div>

        {/* Endless Car Highway */}
        <div className="p-4 sm:p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            ENDLESS CAR HIGHWAY
          </h3>

          <div className="space-y-2 mb-3">
            <img
              src="/assets/ECH1.png"
              alt="Game Screenshot"
              className="rounded-lg w-full object-cover"
            />
            <img
              src="/assets/ECH2.png"
              alt="Game Screenshot"
              className="rounded-lg w-full object-cover"
            />
          </div>

          <div className="space-y-2 text-sm sm:text-base">
            <a
              target="_blank"
              href="https://github.com/Once-1296/car-game"
              className="underline text-blue-600"
            >
              Repository
            </a>
            <hr />
            <a
              target="_blank"
              href="https://once-1296.github.io/car-game/"
              className="underline text-blue-600"
            >
              Documentation Site
            </a>
          </div>

          <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
            A simple 2D four-lane car game with top-down movement built using
            SFML and C++. Fun and easy to play, featuring difficulty settings,
            high scores, and smooth controls.
          </p>

          <ul className="list-disc list-inside mt-3 text-sm sm:text-base text-gray-700 space-y-1">
            <li>Built with C++ and SFML</li>
            <li>Retro-styled Windows game with easy controls</li>
            <li>Includes difficulty levels, menus, and high scores</li>
            <li>Simple arrow key movement</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          target="_blank"
          href="https://github.com/Once-1296?tab=repositories"
          className="text-blue-600 hover:underline text-sm sm:text-base"
        >
          View All Repositories →
        </a>
      </div>
    </main>
  );
};

export default Projects;
