import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../component/Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col gap-4 w-[900px] mx-auto mt-60">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
