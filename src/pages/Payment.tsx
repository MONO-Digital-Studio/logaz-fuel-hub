
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvoiceRequestForm from "@/components/payment/InvoiceRequestForm";
import InvoiceTable from "@/components/payment/InvoiceTable";

const Payment = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Оплата</h1>
      <Tabs defaultValue="request" className="w-full">
        <TabsList>
          <TabsTrigger value="request">Запросить счет</TabsTrigger>
          <TabsTrigger value="history">История счетов</TabsTrigger>
        </TabsList>
        <TabsContent value="request" className="p-4">
          <InvoiceRequestForm />
        </TabsContent>
        <TabsContent value="history" className="p-4">
          <InvoiceTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Payment;
