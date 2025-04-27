
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquareText,
  Bell,
  InfoCircle,
} from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: "info" | "warning" | "success";
  date: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Перерасход топлива",
    message: "Обнаружен перерасход топлива на автомобиле ХХ123Х",
    type: "warning",
    date: "27.04.2025",
    isRead: false,
  },
  {
    id: 2,
    title: "Новая транзакция",
    message: "Успешно проведена заправка на АЗС 'Газпромнефть'",
    type: "success",
    date: "27.04.2025",
    isRead: true,
  },
  {
    id: 3,
    title: "Обновление системы",
    message: "Доступно новое обновление системы. Нажмите, чтобы узнать подробности.",
    type: "info",
    date: "26.04.2025",
    isRead: true,
  },
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "warning":
      return <Bell className="h-5 w-5 text-logaz-orange" />;
    case "success":
      return <MessageSquareText className="h-5 w-5 text-logaz-green" />;
    case "info":
      return <InfoCircle className="h-5 w-5 text-logaz-blue" />;
  }
};

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Уведомления</h1>
        <Badge variant="secondary">
          {notifications.filter((n) => !n.isRead).length} новых
        </Badge>
      </div>

      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`transition-colors ${
              !notification.isRead ? "bg-logaz-light-gray" : ""
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              {getNotificationIcon(notification.type)}
              <CardTitle className="text-base">
                {notification.title}
              </CardTitle>
              <div className="ml-auto text-sm text-muted-foreground">
                {notification.date}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
