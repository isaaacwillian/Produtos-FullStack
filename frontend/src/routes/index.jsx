import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { ProtectedCredentials, ProtectedRoute } from "./protection";
import { useDispatch } from "react-redux";
import { turnAuthTrueRequest } from "../store/modules/auth/action";

export default function Routes() {
  const dispatch = useDispatch();
  dispatch(turnAuthTrueRequest());

  return (
    <Router>
      <Route path="/" element={<ProtectedRoute component={<Dashboard />} />} />
      <Route path="login" element={<ProtectedCredentials component={<Login />} />} />
      <Route path="register" element={<ProtectedCredentials component={<Register />} />} />
    </Router>
  );
}
