import React from "react";
import "./Card1.css";
import heartIcon from "../../../images/heart.jpg";
import { useGlobalState } from "../../../GlobalStateContext";
import {
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Card1 = () => {
  const { state } = useGlobalState();

  return (
    <div className="card_container">
      <p className="card1_name">{state.name},</p>
      <ul className="card1_ul">
        <li>Je t'ai rencontré</li>
        <li>Je t'ai adoré</li>
        <li>Je t'ai aimé,</li>
      </ul>
      <h1 className="card1_h1">Je t'aime</h1>
      <img
        src={heartIcon}
        alt=""
        className="heart_img"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Card1;
