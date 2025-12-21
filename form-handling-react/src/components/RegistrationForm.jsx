import { useState } from "react";
import "./../App.css"

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!password) {
      setErrors("All fields are required");
      return;
    }
    if (!email) {
      setErrors("All fields are required");
      return;
    }
    if (!username) {
      setErrors("All fields are required");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });
    alert(`User registered: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;