import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Staticks = () => {
  const [donates, setDonate] = useState(0)
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
      //  const staticksvalue = 4350;
       let remainingData = totalDonaite - donate;
       setTotalDonaite(remainingData);
       setDonate(donate)
     }
     console.log(donate);
  }, [])
  console.log(donates,totalDonaite);
  const data = [
    { name: "Group A", value: donates },
    { name: "Group B", value: totalDonaite },
    
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Staticks;
