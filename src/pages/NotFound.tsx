
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-logaz-light-gray">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-logaz-blue">404</h1>
        <p className="text-xl text-logaz-dark-gray mb-4">Страница не найдена</p>
        <Link to="/dashboard" className="btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
