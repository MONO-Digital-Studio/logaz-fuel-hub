
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Filter, Columns2 } from "lucide-react";

const TransactionFilters = () => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Фильтры</h2>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Сбросить
          </Button>
          <Button variant="outline" size="sm">
            <Columns2 className="h-4 w-4 mr-2" />
            Группировка
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Выберите карту" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все карты</SelectItem>
            <SelectItem value="card1">Карта 1</SelectItem>
            <SelectItem value="card2">Карта 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Вид топлива" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все виды</SelectItem>
            <SelectItem value="92">АИ-92</SelectItem>
            <SelectItem value="95">АИ-95</SelectItem>
            <SelectItem value="diesel">ДТ</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="АГЗС" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все станции</SelectItem>
            <SelectItem value="station1">АГЗС №1</SelectItem>
            <SelectItem value="station2">АГЗС №2</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex space-x-2">
          <Input type="number" placeholder="Мин. сумма" className="w-1/2" />
          <Input type="number" placeholder="Макс. сумма" className="w-1/2" />
        </div>
      </div>

      <div className="flex space-x-2">
        <Select defaultValue="month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Период" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="year">За год</SelectItem>
            <SelectItem value="quarter">За квартал</SelectItem>
            <SelectItem value="month">За месяц</SelectItem>
            <SelectItem value="week">За неделю</SelectItem>
            <SelectItem value="day">За день</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TransactionFilters;
