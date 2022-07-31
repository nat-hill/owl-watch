import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend, Label, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';
import { useState, useEffect } from "react";
  
/*
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
*/

const display = () => {
  
    // Sample data
    const data = [
    {name: 'Geeksforgeeks', secondsSpent: 400, fill: "green", date: 'day1'},
    {name: 'Technical scripter', secondsSpent: 700, fill: "red", date: 'day1'},
    {name: 'Geek-i-knack', secondsSpent: 200, fill: "blue", date: 'day1'},
    {name: 'Geek-o-mania', secondsSpent: 1000, fill: "purple", date: 'day1'}
    ];  
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    //const testData = fetchTest();

    return (
        <div>
            <h1>
                Display
            </h1>
            <div className = "App">
            <PieChart width={620} height={700}>
                <Pie data={data}
                cx={280}
                cy={400}
                dataKey={"secondsSpent"}
                nameKey={"name"}
                innerRadius={180}
                outerRadius={275}
                paddingAngle={3}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
            <BarChart
              layout = "vertical"
              width={500}
              height={350}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 50,
              }}
              barSize = {50}
            >
              <YAxis type="category" dataKey="name" scale="point" padding={{ left: 10, right: 10, bottom: 50 }} />
              <XAxis type="number"/>
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey={"secondsSpent"} nameKey={"name"} fill="#8884D8" background={{ fill: '#eee' }} >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
              </Bar>
            </BarChart>

            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="secondsSpent" stackId="a" fill="#8884d8" />
            <Bar dataKey="secondsSpent" stackId="a" fill="#82ca9d" />
          </BarChart>
            </div>
        </div>
    );
    }
    export default display;

