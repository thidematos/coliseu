import { useLoaderData } from "react-router-dom";
import NavLinks from "./NavLinks";
import User from "./User";

function AdminControls() {
  const user = useLoaderData();

  return (
    <div className="grid grid-cols-5 px-4">
      <User />
      <NavLinks />
    </div>
  );
}

export default AdminControls;
