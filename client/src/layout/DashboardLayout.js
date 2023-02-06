import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getRole } from "../API/user";
import Sidebar from "../Components/Dashboard/Sidebar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import Loading from "../Pages/shared/Loading";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="md:flex relative min-h-screen">
      {loading? (<Loading/>) : (
        <>
        <Sidebar role={role} />
      <div className="flex-1 md:ml-72">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
