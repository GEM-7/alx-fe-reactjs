import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserProfile() {
  const props = useContext(UserContext);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}
