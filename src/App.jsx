import { useState, useEffect } from "react";

import Login from "./components/Login";
import Register from "./components/Register";

import BuyerDashboard from "./pages/BuyerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {

  const [page, setPage] =
    useState("login");

  useEffect(() => {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (currentUser) {

      if (
        currentUser.role ===
        "admin"
      ) {

        setPage("admin");

      } else {

        setPage("buyer");

      }

    }

  }, []);

  return (
    <>

      {page === "login" && (
        <Login
          setPage={setPage}
        />
      )}

      {page === "register" && (
        <Register
          setPage={setPage}
        />
      )}

      {page === "buyer" && (
        <BuyerDashboard
          setPage={setPage}
        />
      )}

      {page === "admin" && (
        <AdminDashboard
          setPage={setPage}
        />
      )}

    </>
  );
}

export default App;