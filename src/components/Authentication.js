import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const defaultUsername = "admin";
  const defaultPassword = "password";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      navigate("/certificate");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Authentication;
