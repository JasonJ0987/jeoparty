import React, {useEffect, useState} from "react";


const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const [double_j, setDouble_j] = useState(false);
  const [catId, setCatId] = useState("");
  const [categories, setCategories] = useState([]);

  const handleQuestionChange = async (e) => {
    const value = e.target.value;
    setQuestion(value);
  }
  const handleAnswerChange = async (e) => {
    const value = e.target.value;
    setAnswer(value);
  }
  const handlePointsChange = async (e) => {
    const value = e.target.value;
    setPoints(value);
  }
  const handleDoubleChange = async (e) => {
    setDouble_j(!double_j);
  }
  const handleCatIdChange = async (e) => {
    const value = e.target.value;
    setCatId(value);
  }

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
      console.log("Failed to load categories")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.question = question;
    data.answer = answer;
    data.points = points;
    data.double_j = double_j;
    data.category_id = catId;

    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/questions`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setQuestion("")
      setAnswer("")
      setPoints(0)
      setDouble_j(false)
      setCatId("")
    } else {
      const error = await response.json();
      console.log("error", error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            id="question"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            name="answer"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="points">Points</label>
          <input
            type="integer"
            name="points"
            id="points"
            value={points}
            onChange={handlePointsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="double_j">Double Jeoparty?</label>
          <input
            type="checkbox"
            name="double_j"
            id="double_j"
            value={double_j}
            onChange={handleDoubleChange}
            checked={double_j}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category_id" className="form-label">Choose a Category</label>
          <select
            onChange={handleCatIdChange}
            value={catId}
            name="category_id"
          >
            <option value="">Categories</option>
            {categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
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
  );
}

export default QuestionForm;
