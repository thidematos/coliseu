import { Outlet, useLoaderData } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <section className="pb-20">
      <Sidebar />
      <AdminHeader useControls={true} />
      <Outlet />
    </section>
  );
}

export default AdminDashboard;
