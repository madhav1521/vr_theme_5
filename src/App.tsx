import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Innerpage from "./Pages/Innerpage";

import { mytheme } from "./myTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mytheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/innerpage" element={<Innerpage></Innerpage>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
