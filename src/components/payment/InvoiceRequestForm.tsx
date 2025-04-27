
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

interface InvoiceFormData {
  amount: number;
  contract: string;
  comment: string;
}

const contracts = [
  { id: "1", name: "Договор №1" },
  { id: "2", name: "Договор №2" },
];

const InvoiceRequestForm = () => {
  const form = useForm<InvoiceFormData>();

  const onSubmit = (data: InvoiceFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сумма</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Введите сумму" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contract"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Договор</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите договор" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {contracts.map((contract) => (
                    <SelectItem key={contract.id} value={contract.id}>
                      {contract.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Комментарий</FormLabel>
              <FormControl>
                <Textarea placeholder="Введите комментарий" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Запросить счет</Button>
      </form>
    </Form>
  );
};

export default InvoiceRequestForm;
