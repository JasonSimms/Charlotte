import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import api from "./utils/api";

const Trends = props => {
  if (props.data == "") {
    return <div>LOADING...</div>;
  } else {
    // NEWS IMAGES DO NOT LOAD. 404 error outsanding issue.
    let news = props.data.news;
    const mappedNews = news.map((el, i) => {
      return (
        <div className="news-card" key={i}>
          {el.headline}
          <br />
          <br />
          {el.summary}
          <br />
          Source: {el.source}
          <br />
          <a href={el.url} target="_blank">
            Link to Article
          </a>
        </div>
      );
    });

    return (
      <div>
        <div className="trendscontainer">
        <div className="newscontainer">

          <h2>
            What's new at {props.data.company.companyName}?
          </h2>
          <img src={props.data.logo.url} alt="" />
          </div>
          <div className="newscontainer">
          {mappedNews}
          </div>
        </div>
      </div>
    );
  }
};

export default Trends;
