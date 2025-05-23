
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('renders with default props', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
    expect(screen.getByText('Иванов И.И.')).toBeInTheDocument();
    expect(screen.getByText('ООО Транспортные Системы')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <BrowserRouter>
        <Header userName="Петров П.П." companyName="ООО Логистика" />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Петров П.П.')).toBeInTheDocument();
    expect(screen.getByText('ООО Логистика')).toBeInTheDocument();
  });
});
