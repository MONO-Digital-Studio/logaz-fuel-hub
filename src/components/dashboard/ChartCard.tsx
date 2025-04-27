import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";

interface ChartCardProps {
  title: string;
  type: "line" | "bar" | "pie";
  data: any[];
  height?: number;
  customTooltip?: (value: number) => string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  type,
  data,
  height = 300,
  customTooltip,
}) => {
  const COLORS = ["#3B55A2", "#FB8607", "#4CAF50", "#F44336", "#CCCCCC"];

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
            <XAxis dataKey="name" stroke="#333333" />
            <YAxis stroke="#333333" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B55A2"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
            <XAxis dataKey="name" stroke="#333333" />
            <YAxis stroke="#333333" />
            <Tooltip 
              formatter={(value: number) => 
                customTooltip ? customTooltip(value) : value.toLocaleString()
              }
            />
            <Legend />
            <Bar dataKey="value" fill="#3B55A2">
              <LabelList 
                dataKey="displayValue" 
                position="inside" 
                fill="white" 
                fontWeight="bold"
              />
            </Bar>
          </BarChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => 
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => 
                customTooltip ? customTooltip(value) : value.toLocaleString()
              }
            />
            <Legend />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card animate-scale-in">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
