import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "beige",
        justifyContent: "center",
        display: "inline-flex",
      }}
    >
      <Link to="/" style={{ padding: "8px" }}>
        Home
      </Link>
      <Link to="/recipes" style={{ padding: "8px" }}>
        Recipe List
      </Link>
    </nav>
  );
}
