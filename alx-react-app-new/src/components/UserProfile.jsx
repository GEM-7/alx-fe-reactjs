export default function UserProfile({ name, age, bio }) {
  return (
    <div>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          border: "1px solid beige",
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
