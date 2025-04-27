
import React from "react";
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

const TransactionTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Дата
            <Button variant="ghost" size="icon" className="ml-2">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>
            Карта
            <Button variant="ghost" size="icon" className="ml-2">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>АГЗС</TableHead>
          <TableHead>Вид топлива</TableHead>
          <TableHead>Объем (л)</TableHead>
          <TableHead>Сумма (₽)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.card}</TableCell>
            <TableCell>{transaction.station}</TableCell>
            <TableCell>{transaction.fuelType}</TableCell>
            <TableCell>{transaction.volume}</TableCell>
            <TableCell>{transaction.amount.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
