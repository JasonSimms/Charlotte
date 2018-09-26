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
        <article className="article column" key={el.datetime}>
        <a href={el.url} target="_blank" className="link nav-link">
          <h3 className="article__category">{el.source}</h3>
          <h2 className="article__title">{el.headline}</h2>
          <p className="article__excerpt">{el.summary}</p>
        </a>
        </article>
      );
    });

    return (
        <div className="container trendscontainer">
            <h2>What's new at {props.data.company.companyName}?</h2>
            <div className="cardbox">{mappedNews}</div>
        </div>
    );
  }
};

export default Trends;
