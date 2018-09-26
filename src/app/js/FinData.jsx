import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import api from "./utils/api";

const FinData = props => {
  if (props.data == "") {
    return <div>No Data?...</div>;
  } else {
    const datum = props.data.stats; 
    // console.log(`look here`, Object.keys(datum));
    const toBeDisplayed = [
      "week52high",
    "week52low",
    "dividendRate","shortInterest", "dividendRate", "exDividendDate","latestEPSDate","revenue", "grossProfit", "cash","debt","returnOnAssets","profitMargin","day200MovingAvg","instutionPercent","insiderPercent","shortRatio","year2ChangePercent","month3ChangePercent","day5ChangePercent"
    ]
    const display = toBeDisplayed.map((el, i) => {
      return <div className="datacard" key={i}>{el}  :  {datum[el]}</div>;

    });

    return (
      <div>
        <div className="container">
          <h2>
            <div className="databox">
            {display}
            </div>
          </h2>
        </div>
      </div>
    );
  }
};

export default FinData;
