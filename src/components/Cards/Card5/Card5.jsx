import { useRef } from "react";
import { useGlobalState } from "../../../GlobalStateContext";
import "./Card5.css";
import heartIcon from "../../../images/heart.jpg";
import html2canvas from "html2canvas";
import {
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Card5 = () => {
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

  const shareOnWhatsApp = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const imageData = canvas.toDataURL("image/jpeg");

      const url = "https://api.whatsapp.com/send?text=Regarde cette carte";

      window.open(`${url}&media=${encodeURIComponent(imageData)}`, "_blank");
    });
  };

  return (
    <div className="card_container" ref={cardRef}>
      <ul className="card5_ul">
        <li>Bonne </li>
        <li>Saint-Valentin</li>
        <li>A mon incroyable</li>
        <li> petite amie</li>
      </ul>
      <h1 className="card5_h1">{state.name}</h1>
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

export default Card5;
