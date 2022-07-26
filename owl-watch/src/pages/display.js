import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
  
  
const display = () => {
  
// Sample data
const data = [
  {name: 'Geeksforgeeks', secondsSpent: 400, fill: "green"},
  {name: 'Technical scripter', secondsSpent: 700, fill: "red"},
  {name: 'Geek-i-knack', secondsSpent: 200, fill: "blue"},
  {name: 'Geek-o-mania', secondsSpent: 1000, fill: "purple"}
];  

return (
    <div>
        <h1>
            Display
        </h1>
        
        <PieChart width={700} height={700}>
            <Pie data={data} 
            dataKey={"secondsSpent"} 
            nameKey={"name"} 
            outerRadius={300}/>
            <Legend />
        </PieChart>
    </div>
);
}
export default display;

