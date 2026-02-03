import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome, {user.email}</h2>
      <button className="btn btn-danger mt-3" onClick={() => { logout(); navigate("/login"); }}>Logout</button>
    </div>
  );
}
