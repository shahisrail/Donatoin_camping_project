import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const Staticks = () => {
  const [donates, setDonate] = useState(0);
  const [totalDonaite, setTotalDonaite] = useState(4350);
  useEffect(() => {
    let donate = 0;
    const donatoinIteam = JSON.parse(localStorage.getItem("donaite"));
    //  let remainingData = 0;
    if (donatoinIteam) {
      for (let item of donatoinIteam) {
        donate += parseInt(item.Donate);
        console.log(item.Donate);
      }
    //  this is 
      let remainingData = totalDonaite - donate;
      setTotalDonaite(remainingData);
      setDonate(donate);
    }
    console.log(donate);
  }, []);
  console.log(donates, totalDonaite);
  const data = [
    { name: "Your Donation", value: donates },
    { name: "Total Donation", value: totalDonaite },
  ];

  const COLORS = ["#00C49F", "#FF444A", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={600} height={600} className="mx-auto">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        md:outerRadius={180}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend>
        
       </Legend>
    </PieChart>
  );
};

export default Staticks;
