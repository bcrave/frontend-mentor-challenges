import equilibrium from "../assets/images/image-equilibrium.jpg";
import avatar from "../assets/images/image-avatar.png";
import etherium from "../assets/images/icon-ethereum.svg";
import clock from "../assets/images/icon-clock.svg";
import view from "../assets/images/icon-view.svg";

export default function NftPreview() {
  return (
    <div className="nft-preview">
      <div className="content">
        <div className="img-wrapper">
          <div className="overlay">
            <img src={view} alt="See more" className="eye" />
          </div>

          <img src={equilibrium} alt="Equilibrium" />
        </div>

        <h1>Equilibrium #3429</h1>

        <p>Our Equilibrium collection promotes balance and calm.</p>

        <div className="details">
          <div className="value">
            <img src={etherium} alt="Etherium" />
            0.041 ETH
          </div>

          <div className="time-limit">
            <img src={clock} alt="clock" />3 days left
          </div>
        </div>

        <hr />

        <div className="creator">
          <img src={avatar} alt="Jules Wyvern" />

          <div className="attribution">
            Creation of <span>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
}
