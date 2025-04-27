import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, CreditCard, FileText, Users, Building2, Bell, HelpCircle, ChevronRight, ChevronLeft, LogOut, List } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../Logo";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  label,
  collapsed
}) => {
  return (
    <NavLink 
      to={to} 
      className={({isActive}) => `flex items-center py-3 px-4 rounded-md transition-all ${
        isActive ? "bg-logaz-blue text-white" : "text-logaz-dark-gray hover:bg-logaz-blue/10"
      }`}
    >
      <div className="mr-3">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarClasses = isMobile
    ? `fixed inset-y-0 left-0 z-40 bg-white h-screen w-64 transform transition-transform duration-300 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`
    : `fixed inset-y-0 left-0 z-40 bg-white border-r border-logaz-gray h-screen ${
        collapsed ? "w-[76px]" : "w-64"
      } transition-all duration-300`;

  const overlay = isMobile && mobileOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={toggleMobileMenu}
    />
  );

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        >
          <List size={24} />
        </button>
      )}
      
      {overlay}
      
      <div className={sidebarClasses}>
        <div className="flex items-center p-4 border-b border-logaz-gray h-[72px]">
          <Logo className="mx-auto" compact={collapsed} />
        </div>

        <div className="flex-grow overflow-y-auto p-3 space-y-1">
          <NavItem to="/dashboard" icon={<Home size={20} />} label="Главная" collapsed={collapsed} />
          <NavItem to="/cards" icon={<CreditCard size={20} />} label="Топливные карты" collapsed={collapsed} />
          <NavItem to="/payment" icon={<FileText size={20} />} label="Оплата" collapsed={collapsed} />
          <NavItem to="/transactions" icon={<List size={20} />} label="Транзакции" collapsed={collapsed} />
          <NavItem to="/reports" icon={<FileText size={20} />} label="Бухгалтерия" collapsed={collapsed} />
          <NavItem to="/company" icon={<Building2 size={20} />} label="Компания" collapsed={collapsed} />
          <NavItem to="/users" icon={<Users size={20} />} label="Пользователи" collapsed={collapsed} />
          <NavItem to="/notifications" icon={<Bell size={20} />} label="Уведомления" collapsed={collapsed} />
          <NavItem to="/support" icon={<HelpCircle size={20} />} label="Поддержка" collapsed={collapsed} />
        </div>

        {!isMobile && (
          <div className="p-3 border-t border-logaz-gray">
            <button 
              onClick={toggleSidebar}
              className="flex items-center py-2 px-4 w-full text-logaz-dark-gray hover:bg-logaz-blue/10 rounded-md transition-all"
            >
              {collapsed ? (
                <ChevronRight size={20} className="mx-auto" />
              ) : (
                <>
                  <ChevronLeft size={20} className="mr-3" />
                  <span>Свернуть меню</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
