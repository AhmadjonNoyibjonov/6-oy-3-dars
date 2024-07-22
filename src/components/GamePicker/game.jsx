import { useState } from "react";
import React from "react";
import "./game.css";

function game() {
  const [game, setGame] = useState("Pubg");

  const games = [
    "Pubg",
    "Free-fire",
    "CSGO",
    "Dota",
    "GTA",
    "FIFA",
    "PES",
    "KLASH",
  ];

  function handleRender() {
    let randomNumber = Math.floor(Math.random() * games.length);
    setGame(games[randomNumber]);
  }

  return (
    <div className="game-wrap">
      <h2 className="game-h2">{game}</h2>
      <button className="game-button" onClick={handleRender}>
        Render
      </button>
    </div>
  );
}

export default game;
