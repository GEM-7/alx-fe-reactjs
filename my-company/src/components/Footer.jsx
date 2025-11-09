export default function Footer() {
  return (
    <footer
      style={{
        fontSize: "17px",
        fontWeight: "500",
        color: "white",
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}
