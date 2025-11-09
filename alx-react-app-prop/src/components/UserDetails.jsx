import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div>
      <h3>User Details Component using [context]</h3>
      <p>Name: {userDate.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
