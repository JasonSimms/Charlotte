import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Area
} from "recharts";


const Chart = props => {
    // console.log(props)
  let chartData = props.data.chart;
  // console.log(`Chart Component sees: `, chartData);
if(props.data == ""){
    return(
        <div>
            LOADING...
        </div>
    )
}else{
    return (
        <div className="container">
      <h5>
        Charts For...
        {props.data.company.companyName}
      </h5>
      <ResponsiveContainer width="100%" height={400}>
      <ComposedChart  data={chartData}>
        <Line yAxisId="price" type="monotone" dataKey="close" stroke="#8884d8" />
        <Area yAxisId="vol" dataKey='volume' fill='#413ea0' />
        <Bar yAxisId="delta" dataKey='changePercent' barSize={10} fill='#413ea0' />


        {/* <Line type="monotone" dataKey="volume" stroke="#8884d8" /> */}
        <XAxis dataKey="label" 
        tickFormatter={formatXAxis}
        />
        <XAxis dataKey="label" />
        <YAxis yAxisId="price"  domain={['auto', 'auto']}/>
        <YAxis yAxisId="vol" hide='true' orientation='right' padding={{top:250}}/>
        <YAxis yAxisId="delta" hide='true' orientation='right' padding={{top:100, bottom:100}} />

        <CartesianGrid strokeDasharray="5 1"/>
        <Tooltip/>

      </ComposedChart>
        </ResponsiveContainer>
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
