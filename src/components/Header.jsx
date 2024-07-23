import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../images/SweetSentiments.png";
import { useGlobalState } from "../GlobalStateContext";

const Header = () => {
  const { dispatch } = useGlobalState();
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_NAME", payload: inputName });
    setInputName("");
  };

  return (
    <header>
      <div>
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#" className="home">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="#" className="about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="name"
          placeholder="Enter his surname"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </header>
  );
};

export default Header;
