import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

const Trends = props => {
  

  if(props.data == ""){
    return(
        <div>
            LOADING...
        </div>
    )
}else{
  let news = props.data.news;
  console.log(`Trends Component sees: `, news);
  // console.log(news);
  const mappedNews = news.map((el,i) => {
    return <li key={i}>{el.headline}</li>;
  });

  return (
    <div className="container">
      <h2>
        Show me Trends of....
        {props.data.company.companyName}
      </h2>
      <ul>
        {mappedNews}
      </ul>
      <img src={props.data.logo.url} alt="" />
    </div>
  );
};
}
export default Trends;
