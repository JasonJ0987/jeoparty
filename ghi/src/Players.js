import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  const loadPlayers = async() => {
    const url = `${process.env.REACT_APP_API_HOST}/api/players`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setPlayers(data);
    } else {
      console.log("Failed to load players");
    }
  }

  useEffect(() => {
    loadPlayers();
    console.log(players)
  }, [loadPlayers])

  return (
    <div className="background">
      <div className="container">
        <h1 style={{ color: "rgb(0 112 225)", margin: "0px" }}>Players</h1>
        <div className="grid-container">
          {players.map((player) => (
            <li key={player.id} style={{ color: "#a202d8" }}>
              {player.name}
            </li>
          ))}
        </div>
        <Link style={{ color: "rgb(0 112 228)" }} to="/players/new">
          New Player
        </Link>
      </div>
    </div>
  );
}

export default AllPlayers;
