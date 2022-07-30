import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useState, useEffect } from "react";
  
export function fetchTest(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://localhost:3002/users/62dd8efe465554e17bd84158`
            );
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);
      
      return (
        <div>
            { data }
        </div>
      )

}

const display = () => {
  
    // Sample data
    const data = [
    {name: 'Geeksforgeeks', secondsSpent: 400, fill: "green"},
    {name: 'Technical scripter', secondsSpent: 700, fill: "red"},
    {name: 'Geek-i-knack', secondsSpent: 200, fill: "blue"},
    {name: 'Geek-o-mania', secondsSpent: 1000, fill: "purple"}
    ];  

    const testData = fetchTest();

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

            { testData }
        </div>
    );
}
export default display;

