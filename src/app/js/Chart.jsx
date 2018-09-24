import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const Chart = props => {
    console.log(props)
  let chartData = props.data.chart;
  console.log(`Chart Component sees: `, chartData);
if(props.data == ""){
    return(
        <div>
            LOADING...
        </div>
    )
}else{
    return (
        <div className="container">
      <h2>
        Herea are charts of....
        {props.data.company.companyName}
      </h2>
      <LineChart width={400} height={400} data={chartData}>
        <Line type="monotone" dataKey="close" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="volume" stroke="#8884d8" /> */}
        <XAxis dataKey="date" 
        tickFormatter={formatXAxis}
        />
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>

      </LineChart>
      {/* <img src={props.data.logo.url} alt="" /> */}
    </div>
  );
};
}

function formatXAxis(tickItem) {
    return tickItem.slice(-2)
    // If using moment.js
    // return moment(tickItem).format('MMM Do YY')
    }

export default Chart;
