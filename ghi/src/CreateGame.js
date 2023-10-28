import React, { useEffect, useState, useCallback, useMemo } from "react";

const GameForm = () => {
  const [formData, setFormData] = useState({
    category_1: 0,
    category_2: 0,
    category_3: 0,
    category_4: 0,
    category_5: 0,
    question_1: 0,
    question_2: 0,
    question_3: 0,
    question_4: 0,
    question_5: 0,
    question_6: 0,
    question_7: 0,
    question_8: 0,
    question_9: 0,
    question_10: 0,
    question_11: 0,
    question_12: 0,
    question_13: 0,
    question_14: 0,
    question_15: 0,
    question_16: 0,
    question_17: 0,
    question_18: 0,
    question_19: 0,
    question_20: 0,
    question_21: 0,
    question_22: 0,
    question_23: 0,
    question_24: 0,
    question_25: 0,
  });
  const [categories, setCategories] = useState([]);
  const [questionsOne, setQuestionsOne] = useState([]);
  const [questionsTwo, setQuestionsTwo] = useState([]);
  const [questionsThree, setQuestionsThree] = useState([]);
  const [questionsFour, setQuestionsFour] = useState([]);
  const [questionsFive, setQuestionsFive] = useState([]);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({ ...formData, [inputName]: value });
  };

  const loadCategories = useCallback(async () => {
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
  }, [formData]);

  const loadQuestionsOne = useCallback(async () => {
    const num = formData.category_1;
    const url = `${process.env.REACT_APP_API_HOST}/api/questions/category/${num}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestionsOne(data);
    } else {
      console.log("Please set category 1");
    }
  }, [formData]);

  const loadQuestionsTwo = useCallback(async () => {
    const num = formData.category_2;
    const url = `${process.env.REACT_APP_API_HOST}/api/questions/category/${num}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestionsTwo(data);
    } else {
      console.log("Please set category 2");
    }
  }, [formData]);

  const loadQuestionsThree = useCallback(async () => {
    const num = formData.category_3;
    const url = `${process.env.REACT_APP_API_HOST}/api/questions/category/${num}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestionsThree(data);
    } else {
      console.log("Please set category 3");
    }
  }, [formData]);

  const loadQuestionsFour = useCallback(async () => {
    const num = formData.category_4;
    const url = `${process.env.REACT_APP_API_HOST}/api/questions/category/${num}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestionsFour(data);
    } else {
      console.log("Please set category 4");
    }
  }, [formData]);

  const loadQuestionsFive = useCallback(async () => {
    const num = formData.category_5;
    const url = `${process.env.REACT_APP_API_HOST}/api/questions/category/${num}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setQuestionsFive(data);
    } else {
      console.log("Please set category 5");
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_HOST}/api/games`;
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
        category_1: 0,
        category_2: 0,
        category_3: 0,
        category_4: 0,
        category_5: 0,
        question_1: 0,
        question_2: 0,
        question_3: 0,
        question_4: 0,
        question_5: 0,
        question_6: 0,
        question_7: 0,
        question_8: 0,
        question_9: 0,
        question_10: 0,
        question_11: 0,
        question_12: 0,
        question_13: 0,
        question_14: 0,
        question_15: 0,
        question_16: 0,
        question_17: 0,
        question_18: 0,
        question_19: 0,
        question_20: 0,
        question_21: 0,
        question_22: 0,
        question_23: 0,
        question_24: 0,
        question_25: 0,
      });
    } else {
      const error = await response.json();
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    loadCategories();
    loadQuestionsOne();
    loadQuestionsTwo();
    loadQuestionsThree();
    loadQuestionsFour();
    loadQuestionsFive();
  }, [formData]);

  return (
    <div className="background">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="category_1">
              Category 1:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.category_1}
              name="category_1"
            >
              <option value="">-----</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="category_2">
              Category 2:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.category_2}
              name="category_2"
            >
              <option value="">-----</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="category_3">
              Category 3:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.category_3}
              name="category_3"
            >
              <option value="">-----</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="category_4">
              Category 4:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.category_4}
              name="category_4"
            >
              <option value="">-----</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="category_5">
              Category 5:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.category_5}
              name="category_5"
            >
              <option value="">-----</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_1">
              Question 1:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_1}
              name="question_1"
            >
              <option value="">-----</option>
              {questionsOne.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_2">
              Question 2:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_2}
              name="question_2"
            >
              <option value="">-----</option>
              {questionsOne.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_3">
              Question 3:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_3}
              name="question_3"
            >
              <option value="">-----</option>
              {questionsOne.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_4">
              Question 4:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_4}
              name="question_4"
            >
              <option value="">-----</option>
              {questionsOne.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_5">
              Question 5:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_5}
              name="question_5"
            >
              <option value="">-----</option>
              {questionsOne.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_6">
              Question 6:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_6}
              name="question_6"
            >
              <option value="">-----</option>
              {questionsTwo.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_7">
              Question 7:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_7}
              name="question_7"
            >
              <option value="">-----</option>
              {questionsTwo.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_8">
              Question 8:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_8}
              name="question_8"
            >
              <option value="">-----</option>
              {questionsTwo.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_9">
              Question 9:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_9}
              name="question_9"
            >
              <option value="">-----</option>
              {questionsTwo.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_10">
              Question 10:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_10}
              name="question_10"
            >
              <option value="">-----</option>
              {questionsTwo.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_11">
              Question 11:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_11}
              name="question_11"
            >
              1<option value="">-----</option>
              {questionsThree.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_12">
              Question 12:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_12}
              name="question_12"
            >
              <option value="">-----</option>
              {questionsThree.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_13">
              Question 13:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_13}
              name="question_13"
            >
              <option value="">-----</option>
              {questionsThree.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_14">
              Question 14:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_14}
              name="question_14"
            >
              <option value="">-----</option>
              {questionsThree.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_15">
              Question 15:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_15}
              name="question_15"
            >
              <option value="">-----</option>
              {questionsThree.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_16">
              Question 16:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_16}
              name="question_16"
            >
              <option value="">-----</option>
              {questionsFour.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_17">
              Question 17:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_17}
              name="question_17"
            >
              <option value="">-----</option>
              {questionsFour.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_18">
              Question 18:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_18}
              name="question_18"
            >
              <option value="">-----</option>
              {questionsFour.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_19">
              Question 19:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_19}
              name="question_19"
            >
              <option value="">-----</option>
              {questionsFour.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_20">
              Question 20:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_20}
              name="question_20"
            >
              <option value="">-----</option>
              {questionsFour.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_21">
              Question 21:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_21}
              name="question_21"
            >
              <option value="">-----</option>
              {questionsFive.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_22">
              Question 22:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_22}
              name="question_22"
            >
              <option value="">-----</option>
              {questionsFive.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_23">
              Question 23:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_23}
              name="question_23"
            >
              <option value="">-----</option>
              {questionsFive.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_24">
              Question 24:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_24}
              name="question_24"
            >
              <option value="">-----</option>
              {questionsFive.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ color: "#a202d8" }} htmlFor="question_25">
              Question 25:
            </label>
            <select
              onChange={handleFormChange}
              value={formData.question_25}
              name="question_25"
            >
              <option value="">-----</option>
              {questionsFive.map((quest) => (
                <option value={quest.id} key={quest.id}>
                  {quest.question}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GameForm;
