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

        // <div className="news-card" key={i}>
        //   {el.headline}
        //   <br />
        //   <br />
        //   {el.summary}
        //   <br />
        //   Source: {el.source}
        //   <br />
        //   <a href={el.url} target="_blank">
        //     Link to Article
        //   </a>
        // </div>

        // <div className="blog-card alt" key={el.datetime}>
        //   {/* <div className="meta"
        //       >
        //       <div className="photo"
        //       style={{backgroundImage: `url(${props.data.logo.url})`}}
        //       />
        //     </div> */}
        //   <div className="description">
        //     <h1>{el.headline}</h1>
        //     <h2>{el.source}</h2>
        //     <p>{el.summary}</p>
        //     <p className="read-more">
        //       <a href={el.url} target="_blank">
        //         Read More
        //       </a>
        //     </p>
        //   </div>
        // </div>
      );
    });

    return (
        <div className="trendscontainer">
            <h2>What's new at {props.data.company.companyName}?</h2>
            <div className="cardbox">{mappedNews}</div>
        </div>
    );
  }
};

export default Trends;
