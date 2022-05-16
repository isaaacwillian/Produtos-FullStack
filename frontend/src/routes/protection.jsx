import React from "react";
import { Navigate } from "react-router-dom";

const auth = false;

export function ProtectedRoute({ component: Component }) {
  return auth ? Component : <Navigate to="/login" />;
}

export function ProtectedCredentials({ component: Component }) {
  return !auth ? Component : <Navigate to="/" />;
}
