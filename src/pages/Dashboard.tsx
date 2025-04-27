import React, { useState } from "react";
import { CreditCard, Wallet, Droplets, ReceiptText } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import TransactionTable from "../components/dashboard/TransactionTable";
import ChartCard from "../components/dashboard/ChartCard";
import PeriodFilter from "../components/dashboard/PeriodFilter";

const Dashboard = () => {
  const [activePeriod, setActivePeriod] = useState("month");

  const lineData = [
    { name: "1 Май", value: 240 },
    { name: "5 Май", value: 300 },
    { name: "10 Май", value: 200 },
    { name: "15 Май", value: 450 },
    { name: "20 Май", value: 280 },
    { name: "25 Май", value: 350 },
    { name: "30 Май", value: 420 },
  ];

  const fuelData = [
    { name: "Метан", value: 45 },
    { name: "Пропан", value: 35 },
    { name: "ДТ", value: 15 },
    { name: "АИ-95", value: 5 },
  ];

  const topCarsData = [
    { name: "А123АА", value: 320 },
    { name: "В456ВВ", value: 280 },
    { name: "С789СС", value: 250 },
    { name: "Е012ЕЕ", value: 200 },
    { name: "Н345НН", value: 180 },
  ];

  const transactions = [
    {
      id: "1",
      date: "22.05.2023",
      time: "14:32",
      cardNumber: "5678 **** **** 1234",
      driver: "Иванов А.С.",
      fuelType: "Метан",
      volume: "45.0",
      amount: "1 980,00",
      station: "ЛОГАЗ СВ №12",
    },
    {
      id: "2",
      date: "21.05.2023",
      time: "09:15",
      cardNumber: "5678 **** **** 5678",
      driver: "Петров И.К.",
      fuelType: "Пропан",
      volume: "32.5",
      amount: "1 430,00",
      station: "ЛОГАЗ СВ №8",
    },
    {
      id: "3",
      date: "20.05.2023",
      time: "18:47",
      cardNumber: "5678 **** **** 9012",
      driver: "Сидоров М.В.",
      fuelType: "Метан",
      volume: "28.0",
      amount: "1 232,00",
      station: "ЛОГАЗ СВ №15",
    },
    {
      id: "4",
      date: "19.05.2023",
      time: "10:23",
      cardNumber: "5678 **** **** 3456",
      driver: "Козлов А.Д.",
      fuelType: "Пропан",
      volume: "40.5",
      amount: "1 782,00",
      station: "ЛОГАЗ СВ №4",
    },
  ];

  const balanceData = [
    { name: "Собственные средства", value: 98300 },
    { name: "Овердрафт", value: 26200 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-logaz-dark-gray">Главная</h1>
        <PeriodFilter activePeriod={activePeriod} onPeriodChange={setActivePeriod} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Общий баланс"
          value="124 500 ₽"
          description="Собственных средств: 98 300 ₽"
          overdraft="26 200 ₽"
          icon={<Wallet size={24} />}
          color="blue"
        />
        <StatCard
          title="Активных карт"
          value="42"
          description="Приостановлено: 3"
          icon={<CreditCard size={24} />}
          color="orange"
        />
        <StatCard
          title="Объем топлива"
          value="1 280 л"
          description="За текущий месяц"
          icon={<Droplets size={24} />}
          color="green"
        />
        <StatCard
          title="Сумма расходов"
          value="58 240 ₽"
          description="За текущий месяц"
          icon={<ReceiptText size={24} />}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Структура общего баланса"
          type="bar"
          data={balanceData}
        />
        <ChartCard
          title="Динамика расхода топлива"
          type="line"
          data={lineData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Распределение по видам топлива"
          type="pie"
          data={fuelData}
        />
        <ChartCard
          title="Топ-5 автомобилей по расходу топлива"
          type="bar"
          data={topCarsData}
        />
      </div>

      <TransactionTable
        title="Последние транзакции"
        transactions={transactions}
      />
    </div>
  );
};

export default Dashboard;
