import { Outlet, useLoaderData } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function AdminDashboard() {
  const isBiggerThanMobile = useSelector((store) => store.ui.verifyMobile);

  if (isBiggerThanMobile)
    return (
      <section className="grid pb-20 md:grid-cols-8 lg:grid-cols-10">
        <div className="col-span-2 flex flex-col items-center justify-start">
          <Sidebar />
        </div>

        <div className="col-span-6 lg:col-span-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <AdminHeader useControls={true} />
          <Outlet />
        </div>
      </section>
    );

  return (
    <section className="pb-20">
      <Sidebar />
      <AdminHeader useControls={true} />
      <Outlet />
    </section>
  );
}

export default AdminDashboard;
