import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav style={{ display: "inline-flex" }}>
      <Link to="/" style={{ padding: "15px" }}>
        Home
      </Link>
      <Link to="/about" style={{ padding: "15px" }}>
        About
      </Link>
      <Link to="/services" style={{ padding: "15px" }}>
        Services
      </Link>
      <Link to="/contact" style={{ padding: "15px" }}>
        Contact
      </Link>
    </nav>
  );
}
