import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
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
  };
  const loadQuestions = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/api/questions`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestions(data);
    } else {
      console.log("Failed to load questions");
    }
  };

  useEffect(() => {
    loadCategories();
    loadQuestions();
  }, []);

  return (
    <div className="container">
      <h1>Questions</h1>
      <div className="grid-container">
        {categories.map((cat) => (
          <div className="card" key={cat.id}>
            <h5>{cat.title}</h5>
            <div className="card-text">
              {questions.filter(question => question.category_id === cat.id).map(quest => (
                <li key={quest.id}>
                  {quest.question}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/questions/new">
        New Question
      </Link>
    </div>
  );
}

export default AllQuestions
