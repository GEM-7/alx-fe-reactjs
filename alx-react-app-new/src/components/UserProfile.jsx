export default function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {name}
      </h2>
      <p style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
        Age: {age}
      </p>
      <p style={{ color: "white", fontSize: "15px" }}>
        <em>Bio: {bio}</em>
      </p>
    </div>
  );
}
