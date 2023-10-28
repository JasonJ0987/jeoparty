import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import IncreasePoints from "./IncreasePoints";
import DecreasePoints from "./DecreasePoints";

const Game = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);

  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [qCard1, setQCard1] = useState(true);
  const [qCard2, setQCard2] = useState(true);
  const [qCard3, setQCard3] = useState(true);
  const [qCard4, setQCard4] = useState(true);
  const [qCard5, setQCard5] = useState(true);
  const [qCard6, setQCard6] = useState(true);
  const [qCard7, setQCard7] = useState(true);
  const [qCard8, setQCard8] = useState(true);
  const [qCard9, setQCard9] = useState(true);
  const [qCard10, setQCard10] = useState(true);
  const [qCard11, setQCard11] = useState(true);
  const [qCard12, setQCard12] = useState(true);
  const [qCard13, setQCard13] = useState(true);
  const [qCard14, setQCard14] = useState(true);
  const [qCard15, setQCard15] = useState(true);
  const [qCard16, setQCard16] = useState(true);
  const [qCard17, setQCard17] = useState(true);
  const [qCard18, setQCard18] = useState(true);
  const [qCard19, setQCard19] = useState(true);
  const [qCard20, setQCard20] = useState(true);
  const [qCard21, setQCard21] = useState(true);
  const [qCard22, setQCard22] = useState(true);
  const [qCard23, setQCard23] = useState(true);
  const [qCard24, setQCard24] = useState(true);
  const [qCard25, setQCard25] = useState(true);

  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);

  const getGame = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/api/games/${gameId}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setGame(data)
    } else {
      console.log("Failed to load game");
    }
  };
  const getCategories = async () => {
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
  };
  const getQuestions = async () => {
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
      console.log("Failed to load questions")
    }
  };
  const getPlayers = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/api/players`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setPlayers(data);
    } else {
      console.log("Failed to load players")
    }
  };

  let removeAnswer1 = "";
  let removeAnswer2 = "";
  let removeAnswer3 = "";
  let removeAnswer4 = "";
  let removeAnswer5 = "";
  let removeAnswer6 = "";
  let removeAnswer7 = "";
  let removeAnswer8 = "";
  let removeAnswer9 = "";
  let removeAnswer10 = "";
  let removeAnswer11 = "";
  let removeAnswer12 = "";
  let removeAnswer13 = "";
  let removeAnswer14 = "";
  let removeAnswer15 = "";
  let removeAnswer16 = "";
  let removeAnswer17 = "";
  let removeAnswer18 = "";
  let removeAnswer19 = "";
  let removeAnswer20 = "";
  let removeAnswer21 = "";
  let removeAnswer22 = "";
  let removeAnswer23 = "";
  let removeAnswer24 = "";
  let removeAnswer25 = "";


  const displayQuestion1 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard1(false);
  }
  if (qCard1) {
    removeAnswer1 = ""
  } else {
    removeAnswer1 = "hideAnswer"
  }

  const displayQuestion2 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard2(false);
  }
  if (qCard2) {
    removeAnswer2 = ""
  } else {
    removeAnswer2 = "hideAnswer"
  }

  const displayQuestion3 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard3(false);
  }
  if (qCard3) {
    removeAnswer3 = ""
  } else {
    removeAnswer3 = "hideAnswer"
  }

  const displayQuestion4 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard4(false);
  }
  if (qCard4) {
    removeAnswer4 = ""
  } else {
    removeAnswer4 = "hideAnswer"
  }

  const displayQuestion5 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard5(false);
  }
  if (qCard5) {
    removeAnswer5 = ""
  } else {
    removeAnswer5 = "hideAnswer"
  }

  const displayQuestion6 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard6(false);
  }
  if (qCard6) {
    removeAnswer6 = ""
  } else {
    removeAnswer6 = "hideAnswer"
  }

  const displayQuestion7 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard7(false);
  }
  if (qCard7) {
    removeAnswer7 = ""
  } else {
    removeAnswer7 = "hideAnswer"
  }

  const displayQuestion8 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard8(false);
  }
  if (qCard8) {
    removeAnswer8 = ""
  } else {
    removeAnswer8 = "hideAnswer"
  }

  const displayQuestion9 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard9(false);
  }
  if (qCard9) {
    removeAnswer9 = ""
  } else {
    removeAnswer9 = "hideAnswer"
  }

  const displayQuestion10 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard10(false);
  }
  if (qCard10) {
    removeAnswer10 = ""
  } else {
    removeAnswer10 = "hideAnswer"
  }

  const displayQuestion11 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard11(false);
  }
  if (qCard11) {
    removeAnswer11 = ""
  } else {
    removeAnswer11 = "hideAnswer"
  }

  const displayQuestion12 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard12(false);
  }
  if (qCard12) {
    removeAnswer12 = ""
  } else {
    removeAnswer12= "hideAnswer"
  }

  const displayQuestion13 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard13(false);
  }
  if (qCard13) {
    removeAnswer13 = ""
  } else {
    removeAnswer13 = "hideAnswer"
  }

  const displayQuestion14 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard14(false);
  }
  if (qCard14) {
    removeAnswer14 = ""
  } else {
    removeAnswer14 = "hideAnswer"
  }

  const displayQuestion15 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard15(false);
  }
  if (qCard15) {
    removeAnswer15 = ""
  } else {
    removeAnswer15 = "hideAnswer"
  }

  const displayQuestion16 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard16(false);
  }
  if (qCard16) {
    removeAnswer16 = ""
  } else {
    removeAnswer16 = "hideAnswer"
  }

  const displayQuestion17 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard17(false);
  }
  if (qCard17) {
    removeAnswer17 = ""
  } else {
    removeAnswer17 = "hideAnswer"
  }

  const displayQuestion18 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard18(false);
  }
  if (qCard18) {
    removeAnswer18 = ""
  } else {
    removeAnswer18 = "hideAnswer"
  }

  const displayQuestion19 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard19(false);
  }
  if (qCard19) {
    removeAnswer19 = ""
  } else {
    removeAnswer19 = "hideAnswer"
  }

  const displayQuestion20 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard20(false);
  }
  if (qCard20) {
    removeAnswer20 = ""
  } else {
    removeAnswer20 = "hideAnswer"
  }

  const displayQuestion21 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard21(false);
  }
  if (qCard21) {
    removeAnswer21 = ""
  } else {
    removeAnswer21 = "hideAnswer"
  }

  const displayQuestion22 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard22(false);
  }
  if (qCard22) {
    removeAnswer22 = ""
  } else {
    removeAnswer22 = "hideAnswer"
  }

  const displayQuestion23 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard23(false);
  }
  if (qCard23) {
    removeAnswer23 = ""
  } else {
    removeAnswer23 = "hideAnswer"
  }

  const displayQuestion24 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard24(false);
  }
  if (qCard24) {
    removeAnswer24 = ""
  } else {
    removeAnswer24 = "hideAnswer"
  }

  const displayQuestion25 = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question)
    setQCard25(false);
  }
  if (qCard25) {
    removeAnswer25 = ""
  } else {
    removeAnswer25 = "hideAnswer"
  }

  const handleBuzz = (event) => {
    event.preventDefault();
    if (event.key === "z") {
      setPressed1(!pressed1);
      setPressed2(false);
      setPressed3(false);
    } else if (event.key === "v") {
      setPressed1(false);
      setPressed2(!pressed2);
      setPressed3(false);
    } else if (event.key === "m") {
      setPressed1(false);
      setPressed2(false);
      setPressed3(!pressed3);
    } else {
      setPressed1(false);
      setPressed2(false);
      setPressed3(false);
    }
  }

  let play1 = "playerCard1"

  if (pressed1) {
    play1 = "activePlayerCard"
  } else {
    play1= "playerCard1"
  }

  let play2 = "playerCard2"

  if (pressed2) {
    play2 = "activePlayerCard"
  } else {
    play2 = "playerCard2"
  }

  let play3 = "playerCard3"

  if (pressed3) {
    play3 = "activePlayerCard"
  } else {
    play3 = "playerCard3"
  }

  useEffect(() => {
    getGame();
    getCategories();
    getQuestions();
    getPlayers();
  }, [players])

  useEffect(() => {
    document.addEventListener("keydown", handleBuzz);
  }, [pressed1, pressed2, pressed3])


  return (
    <div className="background">
      {modalOpen && <Modal modalOpen={setModalOpen} question={current} />}
      <br />
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {categories
          .filter((category) => category.id === game.category_1)
          .map((cat1) => (
            <div className="catCard" key={cat1.id}>
              {cat1.title}
            </div>
          ))}
        {categories
          .filter((category) => category.id === game.category_2)
          .map((cat2) => (
            <div className="catCard" key={cat2.id}>
              {cat2.title}
            </div>
          ))}
        {categories
          .filter((category) => category.id === game.category_3)
          .map((cat3) => (
            <div className="catCard" key={cat3.id}>
              {cat3.title}
            </div>
          ))}
        {categories
          .filter((category) => category.id === game.category_4)
          .map((cat4) => (
            <div className="catCard" key={cat4.id}>
              {cat4.title}
            </div>
          ))}
        {categories
          .filter((category) => category.id === game.category_5)
          .map((cat5) => (
            <div className="catCard" key={cat5.id}>
              {cat5.title}
            </div>
          ))}
      </div>

      <br />

      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100%vw",
        }}
      >
        {questions
          .filter((question) => question.id === game.question_1)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion1(event, quest)}
              className="topQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer1}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_6)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion6(event, quest)}
              className="topQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer6}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_11)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion11(event, quest)}
              className="topQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer11}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_16)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion16(event, quest)}
              className="topQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer16}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_21)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion21(event, quest)}
              className="topQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer21}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_2)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion2(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer2}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_7)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion7(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer7}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_12)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion12(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer12}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_17)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion17(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer17}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_22)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion22(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer22}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_3)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion3(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer3}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_8)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion8(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer8}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_13)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion13(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer13}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_18)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion18(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer18}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_23)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion23(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer23}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_4)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion4(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer4}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_9)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion9(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer9}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_14)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion14(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer14}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_19)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion19(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer19}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_24)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion24(event, quest)}
              className="questionCard"
              key={quest.id}
            >
              <p className={removeAnswer24}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_5)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion5(event, quest)}
              className="botQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer5}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_10)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion10(event, quest)}
              className="botQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer10}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_15)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion15(event, quest)}
              className="botQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer15}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_20)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion20(event, quest)}
              className="botQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer20}>{quest.points}</p>
            </div>
          ))}
        {questions
          .filter((question) => question.id === game.question_25)
          .map((quest) => (
            <div
              onClick={(event) => displayQuestion25(event, quest)}
              className="botQuestionCard"
              key={quest.id}
            >
              <p className={removeAnswer25}>{quest.points}</p>
            </div>
          ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {players
          .filter((person) => person.id === 1)
          .map((player) => (
            <div className={play1} key={player.id}>
              <div>
                <p style={{ marginBottom: "5px" }}>{player.name}:</p>
              </div>
              <div className="playerPoints">
                <DecreasePoints question={current} players={player} />
                <div>{player.points}</div>
                <IncreasePoints question={current} players={player} />
              </div>
            </div>
          ))}
        {players
          .filter((person) => person.id === 2)
          .map((player) => (
            <div className={play2} key={player.id}>
              <div>
                <p style={{ marginBottom: "5px" }}>{player.name}:</p>
              </div>
              <div className="playerPoints">
                <DecreasePoints question={current} players={player} />
                <div>{player.points}</div>
                <IncreasePoints question={current} players={player} />
              </div>
            </div>
          ))}
        {players
          .filter((person) => person.id === 3)
          .map((player) => (
            <div className={play3} key={player.id}>
              <div>
                <p style={{ marginBottom: "5px" }}>{player.name}:</p>
              </div>
              <div className="playerPoints">
                <DecreasePoints question={current} players={player} />
                <div>{player.points}</div>
                <IncreasePoints question={current} players={player} />
              </div>
            </div>
          ))}
          <audio src={`${process.env.PUBLIC_URL}/ping.mp3`}></audio>
      </div>
    </div>
  );
}

export default Game;


// To Do:
//  2. Create buzzer function
//  3. Clean up visual
