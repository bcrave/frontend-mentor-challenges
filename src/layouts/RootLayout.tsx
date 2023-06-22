import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="solutions">My Solutions</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
