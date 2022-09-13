import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers/Customers";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="d-flex">
        <Link to="/" className="btn btn-info m-2">
          Customers
        </Link>
        <Link to="/login" className="btn btn-info m-2">
          login
        </Link>
        <Link to="/signup" className="btn btn-info m-2">
          sign up
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
