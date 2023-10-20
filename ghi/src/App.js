import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./Main";
import Navbar from "./NavBar";
import CategoryForm from "./CreateCategory";
import QuestionForm from "./CreateQuestion";
import AllCategories from "./Categories";
import AllQuestions from "./Questions";
import AllPlayers from "./Players";
import PlayerForm from "./CreatePlayer";

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="categories">
            <Route index element={<AllCategories />} />
            <Route path="new" element={<CategoryForm />} />
          </Route>
          <Route path="questions">
            <Route index element={<AllQuestions />} />
            <Route path="new" element={<QuestionForm />} />
          </Route>
          <Route path="players">
            <Route index element={<AllPlayers />} />
            <Route path="new" element={<PlayerForm />} />
          </Route>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
