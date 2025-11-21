import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; 
function LoginPage() {
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if (role === "user" && password === "1234") {
      navigate("/user");
    } else if (role === "admin" && password === "4321") {
      navigate("/admin");
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Login to continue</p>
        <label className="label">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
        >
          <option value="user" className="show">User</option>
          <option value="admin" className="show">Admin</option>
        </select>
        <label className="label">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
