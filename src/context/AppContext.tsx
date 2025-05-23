
import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { toast } from 'sonner';

// Определяем типы для пользователя и компании
type User = {
  id: string;
  name: string;
  email: string;
  position: string;
  role: 'admin' | 'operator' | 'viewer';
};

type Company = {
  id: string;
  name: string;
  balance: number;
  overdraft: number;
  activeCards: number;
};

// Определяем тип для контекста
type AppContextType = {
  user: User | null;
  company: Company | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setCompany: (company: Company | null) => void;
  setError: (error: string | null) => void;
  logout: () => void;
  clearError: () => void;
};

// Создаем контекст с начальным значением
const AppContext = createContext<AppContextType | undefined>(undefined);

// Создаем провайдер контекста
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Мемоизированная функция для очистки ошибки
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Мемоизированная функция для выхода
  const logout = useCallback(() => {
    setUser(null);
    setCompany(null);
    // Можно добавить очистку локального хранилища или куков здесь
    localStorage.removeItem('token');
    toast.success('Вы успешно вышли из системы');
  }, []);

  // Мемоизируем значение контекста
  const contextValue = useMemo(() => ({
    user,
    company,
    isLoading,
    error,
    setUser,
    setCompany,
    setError,
    logout,
    clearError,
  }), [user, company, isLoading, error, clearError, logout]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
