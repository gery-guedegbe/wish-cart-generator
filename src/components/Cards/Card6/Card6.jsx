import { useRef } from "react";
import "./Card6.css";
import { useGlobalState } from "../../../GlobalStateContext";
import heartImage from "../../../images/sketchy_style_red_heart.jpg";
import html2canvas from "html2canvas";
import {
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Card6 = () => {
  const { state } = useGlobalState();
  const cardRef = useRef(null);

  const downloadCard = () => {
    html2canvas(cardRef.current).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="card_container" ref={cardRef}>
      {" "}
      <li className="li">Tu es mon</li>
      <img
        src={heartImage}
        alt=""
        className="heart_imgs"
        width={150}
        height={150}
      />
      <h1 className="card6_h1">Autre Moitié</h1>
      <ul className="card6_ul">
        <li>Je t'aime</li>
        <li className="card6_name"> {state.name} </li>
      </ul>
      <div className="overlay">
        <div>
          <a href="#" className="share-btn" onClick={downloadCard}>
            <i>
              {" "}
              <FaDownload />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card6;
