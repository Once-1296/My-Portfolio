import React from "react";

const Projects: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
     <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">TRAIN YOUR FOES</h3>
<img src="../../assets/TYF1.png" alt="Game Screenshot"></img>
    <img src="../../assets/TYF2.jpeg" alt="Game Screenshot"></img>
<a target ="_blank" href="https://github.com/AvanishSalunke/TRAIN-YOUR-FOES" className="underline">Repository </a>
<hr></hr>
<a target ="_blank" href="https://avanishsalunke.github.io/TRAIN-YOUR-FOES/" className="underline">Documentation site</a>
  <hr></hr>        <p className="text-gray-600 mb-3">
This Project was made in gracious Collaboration with 
<a target ="_blank" href="https://github.com/AvanishSalunke" className="underline">Avanish Salunke</a> and  
<a target ="_blank" href ="https://github.com/AsparkArcane"  className="underline"> Nathan Dsouza</a> under the extremely appreciated guidance of our VJTI seniors 
<a target ="_blank" href="https://github.com/Abhay-Varnekar" className="underline"> Abhay Varnekar </a> and 
<a target ="_blank" href ="https://github.com/Ishaan0132"  className="underline"> Ishaan Shaikh </a> 
Train Your Foes is not just a game;
 it's a proof-of-concept exploration into adaptive artificial intelligence,
wrapped in a cyber-horror aesthetic.
 Delve into a world of digital decay and neon dread, navigating four levels of intense, precision platforming.
Each stage is a trial, designed to hone your skills for the final, inevitable confrontation:
 a turn-based duel against a machine that learns.
 This is a battle of wits where the opponent's strategy is forged from the ghost
  of a thousand simulated battles, creating an adversary that feels truly alive and unnervingly intelligent.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">ENDLESS CAR HIGHWAY</h3>
    <img src="../../assets/ECH1.png" alt="Game Screenshot"></img>
    <img src="../../assets/ECH2.png" alt="Game Screenshot"></img>
<a target ="_blank" href="https://github.com/Once-1296/car-game" className="underline">Repository </a>
<hr></hr>
<a target ="_blank" href="https://once-1296.github.io/car-game/" className="underline">Documentation site</a>
       <hr></hr>   <p className="text-gray-600 mb-3">
        This project is a simple 2D four lane car game with top down movement built with SFML (Simple and Fast Multimedia Library).
It's fun, easy to play with 3 difficulty options. Track your high scores, sharpen your reflexes and dodge em all.


 <ul className="space-y-2">Features
<li>Built with C++ and SFML</li>
<li>Easy to play, entertaining Retro mobile game on Windows</li>
<li>Fully working with Difficulty Settings, High Scores, Controls help, New game and main menu screens</li>
<li>Simple up-down, left-right keys for movement</li>
<li>Easy-to-run Windows executable</li>
 </ul>

</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <a target="_blank" href="https://github.com/Once-1296?tab=repositories" className="text-blue-600 hover:underline">
          View All Repositories →
        </a>
      </div>
    </main>
  );
};

export default Projects;
