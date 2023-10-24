import React, { useState } from 'react';


const PlayerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    points: 0,
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({...formData, [inputName]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_HOST}/api/players`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFormData({
        name: "",
        points: 0,
      });
    } else {
      const error = await response.json();
      console.log("Error: ", error);
    }
  };

  return (
    <div className="background">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="name">
              Player Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleFormChange}
              style={{ color: "#a202d8"}}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )

}

export default PlayerForm;
