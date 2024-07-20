import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

function AdminDashboard() {
  return (
    <section className="pb-20 pt-10">
      <AdminHeader useControls={true} />
      <Outlet />
    </section>
  );
}

export default AdminDashboard;
