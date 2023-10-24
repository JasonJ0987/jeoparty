import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
  }, [loadCategories]);

  return (
    <div className="background">
      <div>
        <h1 style={{ color: "rgb(0 112 228)", margin: "0px" }}>Categories</h1>
        <ul>
          {categories.map((cat) => (
            <li style={{ color: "#a202d8" }} key={cat.id}>
              {cat.title}
            </li>
          ))}
        </ul>
        <Link style={{ color: "rgb(0 112 228)" }} to="/categories/new">
          New Category
        </Link>
      </div>
    </div>
  );
}

export default AllCategories
