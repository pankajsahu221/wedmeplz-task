import React from "react";
import "../Styles/Home.css";
import { useSelector } from "react-redux";

function Home() {
  // Getting the boolean value, whether the user is logged in or not.
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="home">
      <h2>Your are {isLogged ? "Logged In :)" : "Logged out :|"}</h2>
    </div>
  );
}

export default Home;
