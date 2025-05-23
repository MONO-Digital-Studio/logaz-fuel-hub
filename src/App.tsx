
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import FuelCards from "./pages/FuelCards";
import Reports from "./pages/Reports";
import CompanyInfo from "./pages/CompanyInfo";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import Payment from "./pages/Payment";
import Transactions from "./pages/Transactions";
import { AppProvider } from "./context/AppContext";
import { ErrorHandler } from "./components/ui/error-handler";

// Создаём клиент с настройками для обработки ошибок
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 минут
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <ErrorHandler>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cards" element={<FuelCards />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/company" element={<CompanyInfo />} />
                <Route path="/users" element={<Users />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/support" element={<Support />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ErrorHandler>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
