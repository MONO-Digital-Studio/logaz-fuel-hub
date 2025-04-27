
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Printer, Mail, FileText } from "lucide-react";

const periods = ["year", "quarter", "month", "week", "day"];

const mockInvoices = [
  {
    id: "1",
    date: "2025-04-27",
    amount: 50000,
    status: "Ожидает оплаты",
    contract: "Договор №1",
  },
  {
    id: "2",
    date: "2025-04-26",
    amount: 75000,
    status: "Оплачен",
    contract: "Договор №2",
  },
];

const InvoiceTable = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select defaultValue="month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Выберите период" />
          </SelectTrigger>
          <SelectContent>
            {periods.map((period) => (
              <SelectItem key={period} value={period}>
                {period === "year" && "За год"}
                {period === "quarter" && "За квартал"}
                {period === "month" && "За месяц"}
                {period === "week" && "За неделю"}
                {period === "day" && "За день"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="space-x-2">
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Дата</TableHead>
            <TableHead>Сумма</TableHead>
            <TableHead>Договор</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.amount.toLocaleString()} ₽</TableCell>
              <TableCell>{invoice.contract}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
