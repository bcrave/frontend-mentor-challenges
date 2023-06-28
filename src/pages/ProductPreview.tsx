import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

import mobileImg from "../assets/images/image-product-mobile.jpg";
import desktopImg from "../assets/images/image-product-desktop.jpg";
import cartIcon from "../assets/images/icon-cart.svg";

export default function ProductPreview() {
  const [isMobile, setIsMobile] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  return (
    <div className="product-preview">
      <div className="content">
        <div className="img-wrapper">
          <img
            src={isMobile ? mobileImg : desktopImg}
            alt="Product preview perfume"
          />
        </div>

        <div className="text-wrapper">
          <p className="text-align-left">PERFUME</p>

          <h1 className="text-align-left">Gabrielle Essence Eau De Parfum</h1>

          <p className="text-align-left">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="price text-align-left">
            $149.99 <span>$169.99</span>
          </div>

          <button>
            <div className="icon-wrapper">
              <img src={cartIcon} alt="cart-icon" />
            </div>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
