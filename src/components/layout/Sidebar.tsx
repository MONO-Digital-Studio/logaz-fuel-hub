import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  CreditCard,
  FileText,
  Users,
  Building2,
  Bell,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  LogOut,
  List,
} from "lucide-react";
import Logo from "../Logo";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, collapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center py-3 px-4 rounded-md transition-all ${
          isActive
            ? "bg-logaz-blue text-white"
            : "text-logaz-dark-gray hover:bg-logaz-blue/10"
        }`
      }
    >
      <div className="mr-3">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-white border-r border-logaz-gray h-screen flex flex-col ${
        collapsed ? "w-[76px]" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex items-center p-4 border-b border-logaz-gray">
        {!collapsed && <Logo className="mx-auto" />}
      </div>

      <div className="flex-grow overflow-y-auto p-3 space-y-1">
        <NavItem
          to="/dashboard"
          icon={<Home size={20} />}
          label="Главная"
          collapsed={collapsed}
        />
        <NavItem
          to="/cards"
          icon={<CreditCard size={20} />}
          label="Топливные карты"
          collapsed={collapsed}
        />
        <NavItem
          to="/payment"
          icon={<FileText size={20} />}
          label="Оплата"
          collapsed={collapsed}
        />
        <NavItem
          to="/transactions"
          icon={<List size={20} />}
          label="Транзакции"
          collapsed={collapsed}
        />
        <NavItem
          to="/reports"
          icon={<FileText size={20} />}
          label="Бухгалтерия"
          collapsed={collapsed}
        />
        <NavItem
          to="/company"
          icon={<Building2 size={20} />}
          label="Компания"
          collapsed={collapsed}
        />
        <NavItem
          to="/users"
          icon={<Users size={20} />}
          label="Пользователи"
          collapsed={collapsed}
        />
        <NavItem
          to="/notifications"
          icon={<Bell size={20} />}
          label="Уведомления"
          collapsed={collapsed}
        />
        <NavItem
          to="/support"
          icon={<HelpCircle size={20} />}
          label="Поддержка"
          collapsed={collapsed}
        />
      </div>

      <div className="p-3 border-t border-logaz-gray">
        <button
          onClick={() => setCollapsed(!collapsed)}
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
    </div>
  );
};

export default Sidebar;
