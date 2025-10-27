import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./parts/header";
import Home from "./pages/home";
import Game from "./pages/game";
import Leaderboard from "./parts/leaderboard";
import Profile from "./parts/profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
