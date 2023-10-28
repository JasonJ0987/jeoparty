import React from "react";

function IncreasePoints({ question, players }) {

  const point = players.points + question.points
  const id = players.id

  const upPoints = async (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_API_HOST}/api/players/points/${id}?points=${point}`
    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
    } else {
      console.log("Error");
    }
  };



  return (
    <div onClick={upPoints} style={{ marginLeft: "10px", cursor:"pointer" }}>
      +
    </div>
  )
}

export default IncreasePoints
