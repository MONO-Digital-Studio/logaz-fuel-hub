
import React from "react";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

const CompanyInfo = () => {
  // Примерные данные компании
  const companyData = {
    name: "ООО Транспортные Системы",
    inn: "7712345678",
    kpp: "771001001",
    address: "123456, г. Москва, ул. Пример, д. 1",
    contract: {
      number: "TS-2023/12",
      date: "01.01.2023",
      overdraftLimit: "50 000 ₽",
      paymentDelay: "30 дней",
    },
    contacts: {
      phone: "+7 (495) 123-45-67",
      email: "info@example.ru",
      manager: "Сергеев Сергей Сергеевич",
      managerPhone: "+7 (495) 123-45-68",
    },
    fuelPrices: [
      { type: "Метан", price: "20.50 ₽/куб.м", date: "25.05.2023" },
      { type: "Пропан", price: "25.75 ₽/л", date: "25.05.2023" },
    ],
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-logaz-dark-gray">Информация о компании</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card card-header">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-logaz-blue">Основные данные</h2>
            <Building2 className="text-logaz-blue" size={24} />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-logaz-gray">Полное наименование</p>
              <p className="font-medium">{companyData.name}</p>
            </div>

            <div className="flex space-x-6">
              <div>
                <p className="text-sm text-logaz-gray">ИНН</p>
                <p className="font-medium">{companyData.inn}</p>
              </div>
              <div>
                <p className="text-sm text-logaz-gray">КПП</p>
                <p className="font-medium">{companyData.kpp}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-logaz-gray">Адрес</p>
              <div className="flex items-start mt-1">
                <MapPin size={18} className="text-logaz-gray mr-2 mt-0.5" />
                <p>{companyData.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-header">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-logaz-blue">Финансовые условия</h2>
            <Building2 className="text-logaz-blue" size={24} />
          </div>

          <div className="space-y-4">
            <div className="flex space-x-6">
              <div>
                <p className="text-sm text-logaz-gray">Номер договора</p>
                <p className="font-medium">{companyData.contract.number}</p>
              </div>
              <div>
                <p className="text-sm text-logaz-gray">Дата договора</p>
                <p className="font-medium">{companyData.contract.date}</p>
              </div>
            </div>

            <div className="flex space-x-6">
              <div>
                <p className="text-sm text-logaz-gray">Лимит овердрафта</p>
                <p className="font-medium">{companyData.contract.overdraftLimit}</p>
              </div>
              <div>
                <p className="text-sm text-logaz-gray">Отсрочка платежа</p>
                <p className="font-medium">{companyData.contract.paymentDelay}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-header">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-logaz-blue">Контактная информация</h2>
            <Phone className="text-logaz-blue" size={24} />
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <Phone size={18} className="text-logaz-gray mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-logaz-gray">Телефон</p>
                <p className="font-medium">{companyData.contacts.phone}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail size={18} className="text-logaz-gray mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-logaz-gray">Email</p>
                <p className="font-medium">{companyData.contacts.email}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-logaz-gray">Персональный менеджер</p>
              <p className="font-medium">{companyData.contacts.manager}</p>
              <p className="text-sm">{companyData.contacts.managerPhone}</p>
            </div>
          </div>
        </div>

        <div className="card card-header">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-logaz-blue">
              Текущие цены на топливо
            </h2>
          </div>

          <div className="space-y-4">
            {companyData.fuelPrices.map((fuel, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-logaz-light-gray rounded-md">
                <div>
                  <p className="font-medium">{fuel.type}</p>
                  <p className="text-xs text-logaz-gray">
                    Цена актуальна на {fuel.date}
                  </p>
                </div>
                <p className="text-lg font-semibold text-logaz-blue">
                  {fuel.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
