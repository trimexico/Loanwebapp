import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./pages/Pay";
import Login from "./pages/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Loan from "./pages/Loan";
import Question from "./pages/Question";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about-us" element={<About></About>}></Route>
            <Route path="/pay" element={<Pay></Pay>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/loan" element={<Loan></Loan>}></Route>
            <Route path="/question" element={<Question></Question>}></Route>
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
