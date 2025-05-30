
import React from "react";

interface PeriodFilterProps {
  activePeriod: string;
  onPeriodChange: (period: string) => void;
}

const PeriodFilter: React.FC<PeriodFilterProps> = ({
  activePeriod,
  onPeriodChange,
}) => {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={() => onPeriodChange("year")}
        className={`px-4 py-2 text-sm font-medium rounded-l-md border ${
          activePeriod === "year"
            ? "bg-logaz-blue text-white border-logaz-blue"
            : "bg-white text-logaz-dark-gray border-logaz-gray hover:bg-logaz-light-gray"
        }`}
      >
        Год
      </button>
      <button
        type="button"
        onClick={() => onPeriodChange("quarter")}
        className={`px-4 py-2 text-sm font-medium border-t border-b ${
          activePeriod === "quarter"
            ? "bg-logaz-blue text-white border-logaz-blue"
            : "bg-white text-logaz-dark-gray border-logaz-gray hover:bg-logaz-light-gray"
        }`}
      >
        Квартал
      </button>
      <button
        type="button"
        onClick={() => onPeriodChange("month")}
        className={`px-4 py-2 text-sm font-medium border-t border-b ${
          activePeriod === "month"
            ? "bg-logaz-blue text-white border-logaz-blue"
            : "bg-white text-logaz-dark-gray border-logaz-gray hover:bg-logaz-light-gray"
        }`}
      >
        Месяц
      </button>
      <button
        type="button"
        onClick={() => onPeriodChange("week")}
        className={`px-4 py-2 text-sm font-medium border-t border-b ${
          activePeriod === "week"
            ? "bg-logaz-blue text-white border-logaz-blue"
            : "bg-white text-logaz-dark-gray border-logaz-gray hover:bg-logaz-light-gray"
        }`}
      >
        Неделя
      </button>
      <button
        type="button"
        onClick={() => onPeriodChange("day")}
        className={`px-4 py-2 text-sm font-medium rounded-r-md border ${
          activePeriod === "day"
            ? "bg-logaz-blue text-white border-logaz-blue"
            : "bg-white text-logaz-dark-gray border-logaz-gray hover:bg-logaz-light-gray"
        }`}
      >
        День
      </button>
    </div>
  );
};

export default PeriodFilter;
