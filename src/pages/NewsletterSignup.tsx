import { useState, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

import heroImageMobile from "../assets/images/illustration-sign-up-mobile.svg";
import heroImageDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import successIcon from "../assets/images/icon-success.svg";
import { Link } from "react-router-dom";

export default function NewsletterSignup() {
  const benefitsList = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [isMobile, setIsMobile] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 425);
  }, [width]);

  const renderBenefits = () => {
    return benefitsList.map((benefit) => (
      <li key={benefit}>
        <img src={successIcon} alt="success icon" />
        {benefit}
      </li>
    ));
  };

  return (
    <div className="newsletter-signup">
      <div className="content">
        <div className="hero-image-wrapper">
          <img
            className={`hero-image ${isMobile ? "mobile" : "desktop"}`}
            src={isMobile ? heroImageMobile : heroImageDesktop}
            alt="signup illustration"
          />
        </div>

        <div className="content-body-wrapper">
          <div className="text">
            <h1>Stay updated!</h1>

            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>{renderBenefits()}</ul>
          </div>
          <form>
            <label className="email-input">
              <span>Email address</span>

              <input type="email" placeholder="email@company.com" />

              <input type="submit" value="Subscribe to monthly newsletter" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
