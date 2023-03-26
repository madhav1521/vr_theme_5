import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mytheme } from "./myTheme";
import { ThemeProvider } from "@mui/material";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Innerpage from "./Pages/Innerpage";
import Inbox from "./Pages/Inbox";
import Maintenance from "./Pages/Maintenance";
import User from "./Pages/User";
import Setting from "./Pages/Setting";
import History from "./Pages/History";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mytheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/innerpage" element={<Innerpage></Innerpage>} />
            <Route path="/inbox" element={<Inbox></Inbox>} />
            <Route path="/history" element={<History></History>} />
            <Route path="/maintenance" element={<Maintenance></Maintenance>} />
            <Route path="/user" element={<User></User>} />
            <Route path="/setting" element={<Setting></Setting>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
