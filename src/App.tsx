import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers/Customers";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LogOut from "./components/auth/Logout";
import PrivateRouter from "./components/auth/PrivateRouter";

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
        <LogOut />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Customers />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
