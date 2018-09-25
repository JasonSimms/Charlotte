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
    "dividendRate"
    ]
    const display = toBeDisplayed.map((el, i) => {
      // console.log(`el is`,el)
      // console.log(`datum is`,datum)

      // console.log(datum[el])
      return <li key={i}>{el}: {datum[el]}</li>;
    });

    return (
      <div>
        <div className="container">
          <h2>
            ExDividenDate:
            <ul>
            {display}
            </ul>
          </h2>
        </div>
      </div>
    );
  }
};

export default FinData;
