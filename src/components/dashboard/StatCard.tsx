
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  overdraft?: string;
  icon?: React.ReactNode;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  overdraft,
  icon,
  color = "blue",
}) => {
  const borderColor = {
    blue: "border-logaz-blue",
    orange: "border-logaz-orange",
    green: "border-logaz-green",
    red: "border-logaz-red",
  }[color] || "border-logaz-blue";

  return (
    <div className={`card card-header ${borderColor}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-logaz-gray font-medium">{title}</h3>
          <p className="text-2xl font-semibold mt-2">{value}</p>
          {description && (
            <p className="text-xs mt-1">
              <span className="text-logaz-green">Собственные средства: {description}</span>
              {overdraft && (
                <>
                  <br />
                  <span className="text-logaz-red">Овердрафт: {overdraft}</span>
                </>
              )}
            </p>
          )}
        </div>
        {icon && <div className="text-logaz-blue">{icon}</div>}
      </div>
    </div>
  );
};

export default StatCard;
