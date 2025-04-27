import React from "react";
import { Bell, User, Search, LogOut } from "lucide-react";
import Logo from "../Logo";
interface HeaderProps {
  userName?: string;
  companyName?: string;
}
const Header: React.FC<HeaderProps> = ({
  userName = "Иванов И.И.",
  companyName = "ООО Транспортные Системы"
}) => {
  return <header className="bg-white border-b border-logaz-gray px-6 py-[15px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <Logo />
        </div>

        <div className="flex-grow max-w-2xl mx-8 hidden md:block">
          <div className="relative">
            <input type="text" placeholder="Поиск..." className="input-field pl-10" />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-logaz-gray" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-logaz-dark-gray hover:bg-logaz-light-gray rounded-full">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-logaz-red rounded-full"></span>
          </button>

          <div className="flex items-center">
            <div className="mr-4 text-right hidden md:block">
              <p className="text-sm font-medium text-logaz-dark-gray">{userName}</p>
              <p className="text-xs text-logaz-gray">{companyName}</p>
            </div>

            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-logaz-blue text-white">
              <User size={18} />
            </button>
          </div>

          <button className="p-2 text-logaz-dark-gray hover:bg-logaz-light-gray rounded-full">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>;
};
export default Header;