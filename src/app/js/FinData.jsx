import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import api from "./utils/api";

const FinData = props => {
  if (props.data == "") {
    return <div>No Data?...</div>;
  } else {
    const datum = props.data.stats; 
    console.log(`look here`, Object.keys(datum));
    // const mappeddatum = datum.map((el, i) => {
    //   return <li key={i}>{el.key}</li>;
    // });

    return (
      <div>
        <div className="container">
          <h2>
            ExDividenDate:
            {/* {datum.exDividendDate} */}
          </h2>
        </div>
      </div>
    );
  }
};

export default FinData;
