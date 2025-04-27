
import React from "react";

interface Transaction {
  id: string;
  date: string;
  time: string;
  cardNumber: string;
  driver: string;
  fuelType: string;
  volume: string;
  amount: string;
  station: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  title: string;
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, title }) => {
  return (
    <div className="card animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-logaz-gray">
          <thead>
            <tr className="table-header">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Дата / Время
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Номер карты
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Водитель
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Вид топлива
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Объем (л)
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Сумма (₽)
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                АГЗС
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-logaz-gray">
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium">{transaction.date}</div>
                  <div className="text-xs text-logaz-gray">{transaction.time}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {transaction.cardNumber}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {transaction.driver}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {transaction.fuelType}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {transaction.volume}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                  {transaction.amount}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {transaction.station}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
