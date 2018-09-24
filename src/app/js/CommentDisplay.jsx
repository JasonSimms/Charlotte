import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import api from "./utils/api";


const ComDisplay = props => {
  
  
  if (props.comments == "") {
    return <div>No Hot Tips Yet...</div>;
  } else {
    let commentArr = props.comments;
    const mappedComs = commentArr.map((el, i) => {
      return <li key={i}>{el.comment}</li>;
    }
  );

    return (
      <div>
        <div className="container">
          <h2>

            Comment Display here
          </h2>
          <ul>{mappedComs}</ul>
        </div>
      </div>
    );
  }
};


export default ComDisplay;
