
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
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-grow p-6 mt-[72px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
