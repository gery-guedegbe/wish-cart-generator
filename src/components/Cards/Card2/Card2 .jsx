import { useRef } from "react";
import { useGlobalState } from "../../../GlobalStateContext";
import "./Card2.css";
import heartIcon from "../../../images/heart.jpg";
import {
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import html2canvas from "html2canvas";

const Card2 = () => {
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
      <ul className="card2_ul">
        <li>je t'aimais hier,</li>
        <li>je t'aime encore,</li>
        <li>je t'aimerai</li>
        <li>toujours.</li>
      </ul>
      <h1 className="card2_h1">Joyeuse Saint Valentin</h1>
      <h1 className="card2_name"> {state.name} </h1>
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

export default Card2;
