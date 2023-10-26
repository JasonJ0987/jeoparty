import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Game = () => {
  const { gameId } = useParams();
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);

  const getGame = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/api/games/${gameId}`;
  }

  return (
    <div>
      Hello
    </div>
  )
}

export default Game;
