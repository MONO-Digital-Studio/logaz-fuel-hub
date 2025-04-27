import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import Logo from "../components/Logo";
import { Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [inn, setInn] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 500);
  };

  const handleForgotPassword = () => {
    toast({
      title: "Восстановление пароля",
      description: "Функция восстановления пароля будет доступна в следующей версии",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-logaz-light-gray animate-fade-in">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <div className="flex justify-center mb-8">
          <Logo className="h-16" />
        </div>
        
        <h1 className="text-2xl font-syncopate font-bold text-center text-logaz-blue mb-6">
          ВХОД В СИСТЕМУ
        </h1>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="inn" className="text-sm font-medium text-logaz-dark-gray">
              ИНН (логин)
            </label>
            <input
              id="inn"
              type="text"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
              className="input-field"
              placeholder="Введите ИНН организации"
              autoComplete="username"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-logaz-dark-gray">
              Пароль
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-10"
                placeholder="Введите пароль"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-logaz-gray hover:text-logaz-dark-gray"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              {isLoading ? "Вход..." : "Войти"}
            </button>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-logaz-blue hover:underline"
            >
              Забыли пароль?
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-logaz-dark-gray">
          Возникли проблемы со входом? Обратитесь в службу поддержки
        </p>
        <p className="text-sm font-medium mt-1 text-logaz-blue">
          support@logavsv.ru | 8 (800) 123-45-67
        </p>
      </div>
    </div>
  );
};

export default Auth;
