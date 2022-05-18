import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ component: Component }) {
  const authenticated = useSelector((state) => state.auth);
  return authenticated ? Component : <Navigate to="/login" />;
}

export function ProtectedCredentials({ component: Component }) {
  const authenticated = useSelector((state) => state.auth);
  return !authenticated ? Component : <Navigate to="/" />;
}
