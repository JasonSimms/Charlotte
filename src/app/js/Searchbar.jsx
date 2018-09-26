import React from "react";
import { Link } from "react-router-dom";

const Searchbar = props => {
  return (
    <div className="searchBar">
      <form className="search">
        <input
          className="input"
          value={props.query}
          onChange={event =>
            props.handleInputChange("query", event.target.value)
          }
          type="text"
          placeholder="Symbol"
        />

        {/* <button className="go" onClick={props.searchItems} value="$"> */}
        {/* </button> */}
        
        <img className="go" onClick={props.searchItems} src="/wavingcat-copy.png" alt="Charts"/>
      </form>

        <Link className="search-link" to={`/chart/`}>
        <img className="linkicon" src="/chart1.png" alt="Charts"/>
          
        </Link>
        <Link className="search-link" to={`/trends/`}>
          <img className="linkicon" src="/news.png" alt="Trends"/>
        </Link>
        <Link className="search-link" to={`/roboadvisor/${props.stock}`}>
        <img className="linkicon" src="/scale.png" alt="Outlook"/>
        </Link>
    </div>
  );
};

export default Searchbar;
