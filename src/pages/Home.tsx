import { Link } from "react-router-dom";

type ProjectLink = {
  id: number;
  url: string;
  title: string;
};

export default function Home() {
  const links: ProjectLink[] = [
    {
      id: 1,
      url: "qr-code",
      title: "QR Code",
    },
    {
      id: 2,
      url: "results-summary",
      title: "Results Summary",
    },
    {
      id: 3,
      url: "product-preview",
      title: "Product Preview",
    },
    {
      id: 4,
      url: "interactive-rating",
      title: "Interactive Rating",
    },
    {
      id: 5,
      url: "nft-preview",
      title: "NFT Preview",
    },
  ];

  const renderLinks = () => {
    return links.map(({ id, url, title }) => (
      <li key={id}>
        <Link to={url}>{title}</Link>
      </li>
    ));
  };

  return (
    <div className="project-links">
      <ul>{renderLinks()}</ul>
    </div>
  );
}
