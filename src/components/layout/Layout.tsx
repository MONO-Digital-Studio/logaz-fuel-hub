
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth" || location.pathname === "/";

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-logaz-light-gray">
      <div className="fixed inset-y-0 left-0 z-40">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col pl-[76px] md:pl-64">
        <div className="fixed top-0 right-0 left-[76px] md:left-64 z-30">
          <Header />
        </div>
        <main className="flex-grow overflow-y-auto pt-[72px] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
