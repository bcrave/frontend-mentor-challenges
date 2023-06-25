import "../styles/components/card.scss";
import img from "../../public/images/image-qr-code.png";

export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="content">
        <img src={img} alt="QR code with link to Frontend Mentor" />
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
