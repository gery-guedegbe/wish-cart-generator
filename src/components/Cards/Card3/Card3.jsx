import { useRef } from "react";
import "./Card3.css";
import { useGlobalState } from "../../../GlobalStateContext";
import heartIcon from "../../../images/heart.jpg";
import html2canvas from "html2canvas";
import {
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Card3 = () => {
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
      <hi className="card3_h1">
        Joyeuse <br />
        Saint Valentin
      </hi>
      <ul className="card3_ul">
        <li>A l'amour de ma vie</li>
        <li className="card3_name"> {state.name} </li>
      </ul>
      <img
        src={heartIcon}
        alt=""
        className="heart_img"
        width={50}
        height={50}
      />
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

export default Card3;
