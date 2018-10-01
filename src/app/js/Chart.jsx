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
  let chartData = props.data.chart;
  let quoteData = props.data.quote;
  let peers=props.data.peers;
  let mappedPeers = "none";
  if (props.data == "") {
    return <div>LOADING...</div>;
  } else {  
    // console.log(props)
    // let styles = {
    //   backgroundImage: `url(${props.data.logo.url})`,
    //   backgroundSize: 'contain',
    //   backgroundRepeat  : 'no-repeat',    
    // }
    if(peers){mappedPeers = peers.map((el,i) => {return <span key={i}> {el} </span>})}
    let googleURL = `https://www.google.de/search?q=next+earnings+date+of+${quoteData.symbol}`
    let NextEarningsDate = <a href={googleURL} target="_blank">Next Earnings Date</a>

    return (
      <div className="container">
        <h5>
         
          <table className="fintable"
          //  style={styles}
           >
            <tbody>

            <tr>
              <th rowSpan="2"> 
          {quoteData.companyName}</th>
              <td>Latest:  {quoteData.latestPrice}</td>
              <td>Open:  {quoteData.open}</td>
              <td rowSpan="3"> <img src={props.data.logo.url} alt="Logo"/></td>
            </tr>
            <tr>
              <td>Change: {quoteData.changePercent*100} %</td>
              <td>Low / Hi : {quoteData.low}/ {quoteData.high}</td>
            </tr>
            <tr>
              <th >{quoteData.sector}</th>
              <td>Peers: {mappedPeers}</td>
              <td> {NextEarningsDate}  </td>

            </tr>
            </tbody>
          </table>
        </h5>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={chartData}>
            <Line
              yAxisId="price"
              type="monotone"
              dataKey="close"
              stroke="black"
            />
            <Area yAxisId="vol" dataKey="volume" fill="gunmetal" />
            <Bar
              yAxisId="delta"
              dataKey="changePercent"
              barSize={10}
              fill="rgba(51, 77, 80, 1)"
            />

            {/* <Line type="monotone" dataKey="volume" stroke="#8884d8" /> */}
            <XAxis dataKey="label" tickFormatter={formatXAxis} />
            <XAxis dataKey="label" />
            <YAxis yAxisId="price" domain={["auto", "auto"]} />
            <YAxis
              yAxisId="vol"
              hide="true"
              orientation="right"
              padding={{ top: 250 }}
            />
            <YAxis
              yAxisId="delta"
              hide="true"
              orientation="right"
              padding={{ top: 100, bottom: 100 }}
            />

            <CartesianGrid strokeDasharray="5 1" />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
        {/* <img src={props.data.logo.url} alt="" /> */}
      </div>
    );
  }
};

function formatXAxis(tickItem) {
  return tickItem.slice(-2);
  // If using moment.js
  // return moment(tickItem).format('MMM Do YY')
}

export default Chart;
