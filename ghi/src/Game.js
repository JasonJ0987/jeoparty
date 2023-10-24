import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const AllGames = () => {
  const [games, setGames] = useState([]);

  const loadGames = async() => {
    const url = `${process.env.REACT_APP_API_HOST}/api/games`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setGames(data);
    } else {
      console.log("Failed to load games");
    }
  }

  useEffect(() => {
    loadGames();
  }, [])

  return (
    <div className="background">
      <div className="container">
        <h1 style={{ color: "rgb(0 112 225)", margin: "0px" }}>Games</h1>
        <div className="grid-container">
          {games.map((game) => (
            <li key={game.id} style={{ color: "#a202d8" }}>
              Game {game.id}
            </li>
          ))}
        </div>
        <Link to="/games/new" style={{ color: "rgb(0 112 228)" }}>
          New Game
        </Link>
      </div>
    </div>
  )

}

export default AllGames;
