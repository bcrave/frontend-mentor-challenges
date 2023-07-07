import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

type RootStyles = {
  backgroundColor: string;
  color: string;
};

type StyleOptions = {
  [key: string]: RootStyles;
};

const rootStyles: StyleOptions = {
  "/": {
    backgroundColor: "white",
    color: "black",
  },
  "/qr-code": {
    backgroundColor: "hsl(212, 45%, 89%)",
    color: "hsl(218, 44%, 22%)",
  },
  "/results-summary": {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(224, 30%, 27%)",
  },
  "/product-preview": {
    backgroundColor: "hsl(30, 38%, 92%)",
    color: "hsl(212, 21%, 14%)",
  },
  "/interactive-rating": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "/nft-preview": {
    backgroundColor: "hsl(217, 54%, 11%)",
    color: "hsl(0, 0%, 100%)",
  },
  "/newsletter-signup": {
    backgroundColor: "hsl(235, 18%, 26%)",
    color: "hsl(235, 18%, 26%)",
  },
};

export default function RootLayout() {
  const [styles, setStyles] = useState<RootStyles>({
    backgroundColor: "",
    color: "",
  });
  const location = useLocation();

  useEffect(() => {
    setStyles(rootStyles[location.pathname]);
  }, [location]);

  return (
    <main
      className="root-layout"
      style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
    >
      <div className="root-content">
        {location.pathname !== "/" && (
          <Link to=".." style={{ color: styles.color }} className="go-back">
            Go back
          </Link>
        )}

        <Outlet />
      </div>
    </main>
  );
}
