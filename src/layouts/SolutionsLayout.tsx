import { Link, Outlet } from "react-router-dom";

export default function SolutionsLayout() {
  return (
    <div>
      <Link to="qr-code">QR Code</Link>

      <Outlet />
    </div>
  );
}
