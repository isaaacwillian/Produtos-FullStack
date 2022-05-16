import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { ProtectedCredentials, ProtectedRoute } from "./protection";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<ProtectedRoute component={<Dashboard />} />} />
      <Route path="login" element={<ProtectedCredentials component={<Login />} />} />
      <Route path="register" element={<ProtectedCredentials component={<Register />} />} />
    </Router>
  );
}
