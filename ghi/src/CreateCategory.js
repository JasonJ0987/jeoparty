import React, { useState } from "react";


const CategoryForm = () => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.title = title;

    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/categories`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setTitle("");
    } else {
      const error = await response.json();
      console.log("Error", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button
          className="btn btn primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CategoryForm;
