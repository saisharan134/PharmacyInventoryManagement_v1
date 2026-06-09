import { useState } from "react";

function Login({ setPage }) {
  const [role, setRole] = useState("buyer");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      role === "admin" &&
      username === "admin" &&
      password === "123"
    ) {
      setPage("admin");
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(
      (u) =>
        u.user === username &&
        u.pass === password
    );

    if (found) {
      setPage("buyer");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="card login-card">
        <h2>Welcome Back</h2>

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="buyer">
            Customer / Buyer
          </option>

          <option value="admin">
            Pharmacist Admin
          </option>
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={login}>
          Sign In
        </button>

        <button
          onClick={() =>
            setPage("register")
          }
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;