import React, {useState} from "react";


const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const [double_j, setDouble_j] = useState(false);
  const [catId, setCatId] = useState([]);

  const handleQuestionChange = async (e) => {
    e.preventDefault();
    const data = {};
    data.question = question;
  }
}
