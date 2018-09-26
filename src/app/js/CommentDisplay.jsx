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
      // return <li key={i}>{el.author} writes: {el.comment}</li>;
      return <div key={i} className="comcard">
      <p className="msg">{el.comment}</p>
      <p className="author">shared by: {el.author} </p>
      </div>;

    }
  );
    return (
      <div>
          <h2>
            Community Ideas!
          </h2>
        <div className="cardbox">
          {mappedComs}
        </div>
      </div>
    );
  }
};


export default ComDisplay;
