
import React from "react";
import TransactionFilters from "@/components/transactions/TransactionFilters";
import TransactionTable from "@/components/transactions/TransactionTable";

const Transactions = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Транзакции</h1>
      <TransactionFilters />
      <TransactionTable />
    </div>
  );
};

export default Transactions;
