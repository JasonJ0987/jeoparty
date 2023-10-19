import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async() => {
    const url = `${process.env.REACT_APP_API_HOST}/api/categories`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setCategories(data);
    } else {
      console.log("Failed to load categories");
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
      {categories.map((cat) => (
        <li key={cat.id}>
          {cat.title}
        </li>
      ))}
      </ul>
      <Link to="/categories/new">
        New Category
      </Link>
    </div>
  )
}

export default AllCategories
