import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import api from "./utils/api";


const ComDisplay = props => {
  
  // console.log(`CommentDisplay has these`,props)
  
  if (props.comments == "") {
    return <div>No Hot Tips Yet...</div>;
  } else {
    let commentArr = props.comments;
    // console.log(commentArr)
    const mappedComs = commentArr.map((el, i) => {
      return <li key={i}>{el.author} writes: {el.comment}</li>;
    }
  );
    return (
      <div>
        <div className="cardbox">
          <h2>
            Community Ideas!
          </h2>
          <ul>{mappedComs}</ul>
        </div>
      </div>
    );
  }
};


export default ComDisplay;
