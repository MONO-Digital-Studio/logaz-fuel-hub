import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";
const faqItems = [{
  question: "Как добавить новую топливную карту?",
  answer: "Перейдите в раздел 'Топливные карты' и нажмите кнопку 'Добавить карту'. Заполните необходимые данные и сохраните изменения."
}, {
  question: "Как сформировать отчет по расходам?",
  answer: "В разделе 'Отчетность' выберите период, тип отчета и нажмите 'Сформировать'. Отчет будет доступен для скачивания в формате PDF или Excel."
}, {
  question: "Что делать при потере карты?",
  answer: "Немедленно свяжитесь с нашей службой поддержки по телефону или электронной почте для блокировки карты."
}];
const Support = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold">Поддержка</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Phone className="h-5 w-5 text-logaz-blue" />
              Телефон
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">8 (800) 100-00-00</p>
            <p className="text-sm text-muted-foreground">
              Круглосуточная поддержка
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-logaz-blue" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">support@logaz.ru</p>
            <p className="text-sm text-muted-foreground">
              Ответ в течение 24 часов
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-logaz-blue" />
              Чат
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Онлайн-чат</p>
            <p className="text-sm text-muted-foreground">
              Быстрые ответы на вопросы
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Часто задаваемые вопросы
          </CardTitle>
          <CardDescription>
            Поиск по базе знаний
          </CardDescription>
          <div className="mt-2">
            <Input type="search" placeholder="Поиск по вопросам..." className="w-full md:max-w-md" />
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </CardContent>
      </Card>
    </div>;
};
export default Support;