import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const toggleModeGreen = () => {
    if (mode === "light" || mode === "dark") {
      setMode("darkGreen");
      document.body.style.backgroundColor = "#022405";
      showAlert("success", "Dark Green Mode Enable Successfully.");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enable Successfully.");
      document.title = "TextUtils - Light Mode";
    }
  };

  const toggleMode = () => {
    if (mode === "light" || mode === "darkGreen") {
      setMode("dark");
      document.body.style.backgroundColor = "#03111e";
      showAlert("success", "Dark Mode Enable Successfully.");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enable Successfully.");
      document.title = "TextUtils - Light Mode";
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/"
            element={<TextInput mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
