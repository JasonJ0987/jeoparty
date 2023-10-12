import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./Main";
import Navbar from "./NavBar";
import CategoryForm from "./CreateCategory";

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/categories" element={<CategoryForm />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
