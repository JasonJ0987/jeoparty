import React, { useState } from "react";
import "./Modal.css"

function Modal({ modalOpen, question }) {
  const [isAnswered, setIsAnswered] = useState(false);

  let showAnswer = "hidden";

  if (isAnswered) {
    showAnswer = "";
  } else {
    showAnswer = "hidden";
  }

  const isClicked = (event) => {
    event.preventDefault();
    setIsAnswered(!isAnswered);
  }

  if (question.double_j) {
    return (
      <div className="modalBackground">
        <div onClick={isClicked} className="modalContainer">
          <div className="closer">
            <button className="closeButton" onClick={() => modalOpen(false)}> X </button>
          </div>
          <div className="DJ">
            <h1>DOUBLE JEOPARTY</h1>
          </div>
          <div className="modalQuestion">
            <h1>{question.question}</h1>
          </div>
          <div className="modalAnswer">
            <h1 className={showAnswer}>{question.answer}</h1>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="modalBackground">
        <div onClick={isClicked} className="modalContainer">
          <div className="closer">
            <button className="closeButton" onClick={() => modalOpen(false)}> X </button>
          </div>
          <div className="modalQuestion">
            <h1>{question.question}</h1>
          </div>
          <div className="modalAnswer">
            <h1 className={showAnswer}>{question.answer}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
