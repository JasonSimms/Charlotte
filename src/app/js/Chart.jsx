import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


const Chart = props => {
    let chartData=props.data.chart
    // chartData=
    console.log(`Chart Component sees: `,chartData)
        
        return (
            <div className="container">
         <h2>Herea are charts of.... 
         {props.data.company.companyName}
         </h2>
<LineChart width={400} height={400} data={chartData}>
  <Line type="monotone" dataKey="close" stroke="#8884d8" />
</LineChart>
             <img src={props.data.logo.url} alt=""/>
        </div>
    )
}

export default Chart