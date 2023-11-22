import { useParams, useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import * as client from "./client";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (username, password) => {
    try {
      const credentials = { username, password };
      const status = await client.signIn(credentials);

      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => signIn(username, password)}
        className="btn btn-primary"
      >
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
