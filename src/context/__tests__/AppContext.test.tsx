
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { AppProvider, useApp } from '../AppContext';
import { toast } from 'sonner';

// Мокаем toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

// Тестовый компонент для проверки хука useApp
const TestComponent = () => {
  const { user, setUser, logout } = useApp();
  
  return (
    <div>
      <div data-testid="username">{user?.name || 'No user'}</div>
      <button 
        onClick={() => setUser({ id: '1', name: 'Test User', email: 'test@example.com', position: 'Tester', role: 'admin' })}
        data-testid="login-button"
      >
        Login
      </button>
      <button 
        onClick={logout}
        data-testid="logout-button"
      >
        Logout
      </button>
    </div>
  );
};

describe('AppContext', () => {
  it('provides default values', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    expect(screen.getByTestId('username')).toHaveTextContent('No user');
  });
  
  it('allows setting user', async () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    // Перед действием нет пользователя
    expect(screen.getByTestId('username')).toHaveTextContent('No user');
    
    // Выполняем действие
    act(() => {
      screen.getByTestId('login-button').click();
    });
    
    // После действия есть пользователь
    expect(screen.getByTestId('username')).toHaveTextContent('Test User');
  });
  
  it('handles logout correctly', async () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    // Сначала логин
    act(() => {
      screen.getByTestId('login-button').click();
    });
    expect(screen.getByTestId('username')).toHaveTextContent('Test User');
    
    // Затем логаут
    act(() => {
      screen.getByTestId('logout-button').click();
    });
    
    // Проверяем, что пользователь вышел
    expect(screen.getByTestId('username')).toHaveTextContent('No user');
    expect(toast.success).toHaveBeenCalledWith('Вы успешно вышли из системы');
  });
});
