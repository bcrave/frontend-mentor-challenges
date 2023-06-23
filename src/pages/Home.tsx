import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="project-links">
      <ul>
        <li>
          <Link to="qr-code">QR Code</Link>
        </li>
      </ul>
    </main>
  );
}
