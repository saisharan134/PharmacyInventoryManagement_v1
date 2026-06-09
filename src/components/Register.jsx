import { useState } from "react";

function Register({ setPage }) {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const register = () => {

    const username = user.trim();

    if (!username || !pass) {
      alert(
        "Please enter username and password"
      );
      return;
    }

    let users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const userExists =
      users.some(
        (u) =>
          u.user.toLowerCase() ===
          username.toLowerCase()
      );

    if (userExists) {
      alert(
        "Username already exists"
      );
      return;
    }

    users.push({
      user: username,
      pass: pass
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert(
      "Registration Successful"
    );

    setUser("");
    setPass("");

    setPage("login");
  };

  return (
    <div className="container">

      <div className="card login-card">

        <h2
          style={{
            textAlign: "center"
          }}
        >
          Join Pro Pharmacy
        </h2>

        <input
          type="text"
          placeholder="New Username"
          value={user}
          onChange={(e) =>
            setUser(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="New Password"
          value={pass}
          onChange={(e) =>
            setPass(e.target.value)
          }
        />

        <button
          onClick={register}
          style={{
            width: "100%"
          }}
        >
          Register Now
        </button>

        <button
          onClick={() =>
            setPage("login")
          }
          style={{
            width: "100%",
            marginTop: "10px"
          }}
        >
          Back To Login
        </button>

      </div>

    </div>
  );
}

export default Register;