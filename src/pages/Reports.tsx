import React, { useState } from "react";
import { Calendar, Download, Printer, Mail, Filter, FileText, BarChart4 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PeriodFilter from "../components/dashboard/PeriodFilter";
const Reports = () => {
  const [activePeriod, setActivePeriod] = useState("month");
  const [reportType, setReportType] = useState("transactions");
  return <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-logaz-dark-gray">Отчетность</h1>
        <div className="flex items-center space-x-2">
          <PeriodFilter activePeriod={activePeriod} onPeriodChange={setActivePeriod} />
        </div>
      </div>

      <Tabs defaultValue="transactions" className="bg-white rounded-md shadow">
        <div className="p-4 border-b border-logaz-gray">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <TabsTrigger value="transactions" onClick={() => setReportType("transactions")}>Транзакции</TabsTrigger>
            <TabsTrigger value="payments" onClick={() => setReportType("payments")}>Платежи</TabsTrigger>
            <TabsTrigger value="accounts" onClick={() => setReportType("accounts")}>Счета</TabsTrigger>
            <TabsTrigger value="acts" onClick={() => setReportType("acts")}>Акты</TabsTrigger>
            <TabsTrigger value="accounting" onClick={() => setReportType("accounting")}>Акты сверки</TabsTrigger>
            <TabsTrigger value="analytics" onClick={() => setReportType("analytics")}>Аналитика</TabsTrigger>
          </TabsList>
        </div>

        <div className="p-4 border-b border-logaz-gray">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <button className="btn-secondary flex items-center text-sm py-1.5">
                <Calendar size={16} className="mr-2" />
                Выбрать даты
              </button>
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-logaz-blue" />
                <select className="input-field text-sm py-1.5">
                  <option>Все карты</option>
                  <option>Активные карты</option>
                  <option>Заблокированные карты</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="btn-primary flex items-center text-sm py-1.5">
                <FileText size={16} className="mr-2" />
                Сформировать
              </button>
              <button className="btn-secondary flex items-center text-sm py-1.5">
                <Download size={16} className="mr-2" />
                Экспорт
              </button>
              <button className="btn-secondary flex items-center text-sm py-1.5">
                <Mail size={16} className="mr-2" />
                Отправить
              </button>
              <button className="btn-secondary flex items-center text-sm py-1.5">
                <Printer size={16} className="mr-2" />
                Печать
              </button>
            </div>
          </div>
        </div>

        <TabsContent value="transactions" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Отчет по транзакциям</h3>
            <p className="text-logaz-gray mb-6">
              Создайте отчет по транзакциям за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Отчет по платежам</h3>
            <p className="text-logaz-gray mb-6">
              Создайте отчет по платежам за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>

        <TabsContent value="accounts" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Отчет по счетам</h3>
            <p className="text-logaz-gray mb-6">
              Создайте отчет по счетам за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>

        <TabsContent value="acts" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Отчет по актам</h3>
            <p className="text-logaz-gray mb-6">
              Создайте отчет по актам за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>

        <TabsContent value="accounting" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Бухгалтерские отчеты</h3>
            <p className="text-logaz-gray mb-6">
              Создайте бухгалтерский отчет за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="p-4">
          <div className="text-center py-8">
            <BarChart4 size={64} className="mx-auto mb-4 text-logaz-gray" />
            <h3 className="text-lg font-semibold mb-2">Аналитические отчеты</h3>
            <p className="text-logaz-gray mb-6">
              Создайте аналитический отчет за выбранный период, выбрав необходимые фильтры и нажав "Сформировать"
            </p>
            <button className="btn-primary">
              Сформировать отчет
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default Reports;