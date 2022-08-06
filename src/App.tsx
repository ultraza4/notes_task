import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateNote from "./Pages/CreateNote";
import Notes from "./Pages/Notes";
import Home from "./Pages/Home";

const App = () => {
   return (<>
      <div className="container">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create_note" element={<CreateNote />} />
            <Route path="/notes" element={<Notes />} />
         </Routes>
      </div>
   </>)
}

export default App;