import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

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
    color: "hsl(221, 100%, 96%)",
  },
  "/product-preview": {
    backgroundColor: "hsl(30, 38%, 92%)",
    color: "hsl(212, 21%, 14%)",
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
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="root-content">
        <Outlet />
      </div>
    </main>
  );
}
