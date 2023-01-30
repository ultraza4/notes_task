import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateNote from "./Pages/CreateNote";
import Notes from "./Pages/Notes";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
