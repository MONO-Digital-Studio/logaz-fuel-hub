
import React, { useState } from "react";
import { Search, Plus, User, Edit, Trash } from "lucide-react";

interface UserData {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  accessLevel: string;
  status: "active" | "blocked";
}

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Примерные данные пользователей
  const users: UserData[] = [
    {
      id: "1",
      name: "Иванов Иван Иванович",
      position: "Руководитель",
      phone: "+7 (905) 123-45-67",
      email: "ivanov@example.ru",
      accessLevel: "Администратор",
      status: "active",
    },
    {
      id: "2",
      name: "Петрова Мария Сергеевна",
      position: "Бухгалтер",
      phone: "+7 (905) 234-56-78",
      email: "petrova@example.ru",
      accessLevel: "Оператор",
      status: "active",
    },
    {
      id: "3",
      name: "Сидоров Алексей Петрович",
      position: "Менеджер",
      phone: "+7 (905) 345-67-89",
      email: "sidorov@example.ru",
      accessLevel: "Оператор",
      status: "blocked",
    },
    {
      id: "4",
      name: "Козлова Елена Дмитриевна",
      position: "Менеджер по логистике",
      phone: "+7 (905) 456-78-90",
      email: "kozlova@example.ru",
      accessLevel: "Оператор",
      status: "active",
    },
  ];

  // Фильтрация пользователей по поисковому запросу
  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Действие ${action} для пользователя ${userId}`);
    // В реальном приложении здесь был бы API-запрос
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-logaz-dark-gray">Пользователи</h1>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Добавить пользователя
        </button>
      </div>

      <div className="bg-white p-4 rounded-md shadow">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск пользователей..."
            className="input-field w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-logaz-gray"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow">
        <table className="min-w-full divide-y divide-logaz-gray">
          <thead>
            <tr className="table-header">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Пользователь
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Должность
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Телефон
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Уровень доступа
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Статус
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-logaz-gray">
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-logaz-blue text-white flex items-center justify-center">
                        <User size={18} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {user.position}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {user.phone}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {user.email}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {user.accessLevel}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status === "active" ? "Активен" : "Заблокирован"}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUserAction(user.id, "edit")}
                      className="p-1 text-logaz-blue hover:bg-logaz-blue/10 rounded"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleUserAction(user.id, "delete")}
                      className="p-1 text-logaz-red hover:bg-logaz-red/10 rounded"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
