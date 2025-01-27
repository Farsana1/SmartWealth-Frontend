import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Graphical = ({ income, expense }) => {
    console.log(`inside ${income} ${expense}`);
    
  const savings = income - expense;

  const data = [
    { name: "Expense", value: 1000 },
    { name: "Income", value: 1600 },
    { name: "Savings", value: 400 },
  ];

  // Define colors for the chart slices
  const COLORS = ["#FF6347", "#32CD32","#5F63F7"];

  return (
    <div>
      <h3>Financial Distribution</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)} %`}
          outerRadius={160}
          innerRadius={10}
          // paddingAngle={8}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Graphical;
