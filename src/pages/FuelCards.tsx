
import React, { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";

interface FuelCard {
  id: string;
  number: string;
  status: "active" | "blocked";
  driver: string;
  car: string;
  limits: {
    volume: string;
    amount: string;
    period: string;
    fuelTypes: string[];
  };
  lastTransaction: string;
}

const FuelCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "blocked">("all");
  
  // Примерные данные карт
  const cards: FuelCard[] = [
    {
      id: "1",
      number: "5678 **** **** 1234",
      status: "active",
      driver: "Иванов А.С.",
      car: "А123АА",
      limits: {
        volume: "500 л/мес",
        amount: "20 000 ₽/мес",
        period: "00:00-23:59",
        fuelTypes: ["Метан", "Пропан"],
      },
      lastTransaction: "22.05.2023 14:32",
    },
    {
      id: "2",
      number: "5678 **** **** 5678",
      status: "active",
      driver: "Петров И.К.",
      car: "В456ВВ",
      limits: {
        volume: "400 л/мес",
        amount: "17 000 ₽/мес",
        period: "06:00-22:00",
        fuelTypes: ["Метан"],
      },
      lastTransaction: "21.05.2023 09:15",
    },
    {
      id: "3",
      number: "5678 **** **** 9012",
      status: "blocked",
      driver: "Сидоров М.В.",
      car: "С789СС",
      limits: {
        volume: "450 л/мес",
        amount: "19 000 ₽/мес",
        period: "00:00-23:59",
        fuelTypes: ["Метан", "Пропан"],
      },
      lastTransaction: "20.05.2023 18:47",
    },
    {
      id: "4",
      number: "5678 **** **** 3456",
      status: "active",
      driver: "Козлов А.Д.",
      car: "Е012ЕЕ",
      limits: {
        volume: "350 л/мес",
        amount: "15 000 ₽/мес",
        period: "08:00-20:00",
        fuelTypes: ["Пропан"],
      },
      lastTransaction: "19.05.2023 10:23",
    },
  ];

  // Фильтрация карт по статусу и поисковому запросу
  const filteredCards = cards.filter((card) => {
    const matchesStatus =
      statusFilter === "all" || card.status === statusFilter;
    const matchesSearch =
      searchTerm === "" ||
      card.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.car.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCardAction = (cardId: string, action: string) => {
    console.log(`Действие ${action} для карты ${cardId}`);
    // В реальном приложении здесь был бы API-запрос
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-logaz-dark-gray">Топливные карты</h1>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Добавить карту
        </button>
      </div>

      <div className="bg-white p-4 rounded-md shadow">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по номеру карты, водителю или автомобилю..."
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
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-logaz-blue" />
            <select
              className="input-field"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | "active" | "blocked")}
            >
              <option value="all">Все карты</option>
              <option value="active">Активные</option>
              <option value="blocked">Заблокированные</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow">
        <table className="min-w-full divide-y divide-logaz-gray">
          <thead>
            <tr className="table-header">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Номер карты
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Статус
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Водитель
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Автомобиль
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Лимиты и ограничения
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Последняя операция
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-logaz-gray">
            {filteredCards.map((card, index) => (
              <tr key={card.id} className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {card.number}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      card.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {card.status === "active" ? "Активна" : "Заблокирована"}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {card.driver}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {card.car}
                </td>
                <td className="px-4 py-3 text-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-xs bg-logaz-light-gray px-2 py-1 rounded">
                        Объем: {card.limits.volume}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-xs bg-logaz-light-gray px-2 py-1 rounded">
                        Сумма: {card.limits.amount}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-xs bg-logaz-light-gray px-2 py-1 rounded">
                        Время: {card.limits.period}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-xs bg-logaz-light-gray px-2 py-1 rounded">
                        Топливо: {card.limits.fuelTypes.join(", ")}
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {card.lastTransaction}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCardAction(card.id, "edit")}
                      className="btn-secondary text-xs py-1 px-3"
                    >
                      Изменить
                    </button>
                    <button
                      onClick={() => handleCardAction(card.id, card.status === "active" ? "block" : "unblock")}
                      className={`text-xs py-1 px-3 ${
                        card.status === "active" ? "btn-cancel" : "btn-primary"
                      }`}
                    >
                      {card.status === "active" ? "Заблокировать" : "Разблокировать"}
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

export default FuelCards;
