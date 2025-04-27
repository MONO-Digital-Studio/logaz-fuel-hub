
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow overflow-y-auto bg-logaz-light-gray p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
