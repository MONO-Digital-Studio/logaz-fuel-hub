
import React, { useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useApp } from '@/context/AppContext';
import { XCircle } from 'lucide-react';

interface ErrorHandlerProps {
  children: React.ReactNode;
}

export const ErrorHandler: React.FC<ErrorHandlerProps> = ({ children }) => {
  const { error, clearError } = useApp();

  // Автоматически очищать ошибку через 5 секунд
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return (
    <>
      {error && (
        <Alert variant="destructive" className="fixed top-20 right-4 z-50 w-96 animate-in slide-in-from-right">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Ошибка</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {children}
    </>
  );
};
