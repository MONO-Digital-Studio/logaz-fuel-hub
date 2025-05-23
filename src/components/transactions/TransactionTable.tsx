
import React, { useState, useCallback, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useVirtualizer } from '@tanstack/react-virtual';

interface Transaction {
  id: string;
  date: string;
  card: string;
  station: string;
  fuelType: string;
  amount: number;
  volume: number;
}

interface TransactionTableProps {
  transactions?: Transaction[];
  isLoading?: boolean;
}

const mockTransactions = [
  {
    id: "1",
    date: "2025-04-27",
    card: "Карта 1234",
    station: "АГЗС №1",
    fuelType: "АИ-95",
    amount: 2500,
    volume: 50,
  },
  {
    id: "2",
    date: "2025-04-26",
    card: "Карта 5678",
    station: "АГЗС №2",
    fuelType: "ДТ",
    amount: 3000,
    volume: 60,
  },
];

// Создаем большой список транзакций для демонстрации
const generateMockData = (count: number = 100): Transaction[] => {
  const result: Transaction[] = [...mockTransactions];
  
  for (let i = 3; i <= count; i++) {
    result.push({
      id: i.toString(),
      date: `2025-04-${Math.floor(Math.random() * 30) + 1}`,
      card: `Карта ${Math.floor(Math.random() * 9000) + 1000}`,
      station: `АГЗС №${Math.floor(Math.random() * 20) + 1}`,
      fuelType: ["АИ-92", "АИ-95", "АИ-98", "ДТ", "Метан"][Math.floor(Math.random() * 5)],
      amount: Math.floor(Math.random() * 5000) + 1000,
      volume: Math.floor(Math.random() * 100) + 10,
    });
  }
  
  return result;
};

type SortDirection = "asc" | "desc";
type SortField = "date" | "card" | "station" | "fuelType" | "amount" | "volume";

const TransactionTable: React.FC<TransactionTableProps> = ({ 
  transactions = generateMockData(1000),
  isLoading = false
}) => {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  
  // Обработчик клика по заголовку для сортировки
  const handleSort = useCallback((field: SortField) => {
    setSortDirection(prev => 
      field === sortField 
        ? prev === "asc" ? "desc" : "asc" 
        : "asc"
    );
    setSortField(field);
  }, [sortField]);
  
  // Мемоизируем отсортированные данные
  const sortedTransactions = useMemo(() => {
    if (isLoading) return [];
    
    return [...transactions].sort((a, b) => {
      if (sortField === "amount" || sortField === "volume") {
        return sortDirection === "asc" 
          ? a[sortField] - b[sortField] 
          : b[sortField] - a[sortField];
      }
      
      const aValue = String(a[sortField]).toLowerCase();
      const bValue = String(b[sortField]).toLowerCase();
      
      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [transactions, sortField, sortDirection, isLoading]);
  
  // Ссылка на контейнер таблицы для виртуализации
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  
  // Настройка виртуализации списка
  const rowVirtualizer = useVirtualizer({
    count: sortedTransactions.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 56, // примерная высота строки
    overscan: 10,
  });
  
  // Генерация иконки для сортировки
  const getSortIcon = useCallback((field: SortField) => {
    if (field !== sortField) return null;
    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4 ml-2" />
    ) : (
      <ArrowDown className="h-4 w-4 ml-2" />
    );
  }, [sortField, sortDirection]);

  if (isLoading) {
    return <div className="p-4 text-center">Загрузка данных...</div>;
  }

  return (
    <div 
      ref={tableContainerRef} 
      className="overflow-auto max-h-[600px]"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("date")} className="cursor-pointer">
              Дата
              {getSortIcon("date")}
            </TableHead>
            <TableHead onClick={() => handleSort("card")} className="cursor-pointer">
              Карта
              {getSortIcon("card")}
            </TableHead>
            <TableHead onClick={() => handleSort("station")} className="cursor-pointer">
              АГЗС
              {getSortIcon("station")}
            </TableHead>
            <TableHead onClick={() => handleSort("fuelType")} className="cursor-pointer">
              Вид топлива
              {getSortIcon("fuelType")}
            </TableHead>
            <TableHead onClick={() => handleSort("volume")} className="cursor-pointer">
              Объем (л)
              {getSortIcon("volume")}
            </TableHead>
            <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">
              Сумма (₽)
              {getSortIcon("amount")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Используем виртуализацию для отрисовки только видимых элементов */}
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualItem) => {
              const transaction = sortedTransactions[virtualItem.index];
              return (
                <TableRow
                  key={transaction.id}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.card}</TableCell>
                  <TableCell>{transaction.station}</TableCell>
                  <TableCell>{transaction.fuelType}</TableCell>
                  <TableCell>{transaction.volume}</TableCell>
                  <TableCell>{transaction.amount.toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </div>
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
