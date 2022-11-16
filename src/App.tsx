import React from "react";
import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
