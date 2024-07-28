import { useParams } from "react-router-dom";
import { users } from "../store/users.js";

function Profile() {
  const { id } = useParams();
  const user = users.find((user) => user.id == id);

  return <div>Hello, {user.name}</div>;
}

export default Profile;
