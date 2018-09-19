import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

const Trends = props => {
  let news = props.data.news;
  console.log(news);
  const mappedNews = news.map((el,i) => {
    return <li key={i}>{el.headline}</li>;
  });
//   console.log(`Trends Component sees: `, props.data);
  return (
    <div className="container">
      <h2>
        Show me Trends of....
        {props.data.company.companyName}
      </h2>
      <ul>
        <li>list item</li>
        {mappedNews}
      </ul>
      <img src={props.data.logo.url} alt="" />
    </div>
  );
};

export default Trends;
