import "../styles/components/card.scss";
import img from "../assets/image-qr-code.png";

export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="content">
        <img src={img} />
        <div className="text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
