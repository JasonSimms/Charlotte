import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = props => {
    return (
        <div className="container nav-content searchBar">
         <form className="search" 
         >
            <input
                className="input"
                value={props.query}
                onChange={event => props.handleInputChange("query",event.target.value)}
                type="text"
                placeholder="Symbol"
            />
            <button className="button" onClick={props.searchItems}  value="$">$</button>
        </form>

        <Link className="link search-link" to={`/chart/`}>
                              Charts
                             </Link>
                             &nbsp; &nbsp; &nbsp;
                     <Link className="link search-link" to={`/trends/`}>
                              Trends
                             </Link>
                             &nbsp; &nbsp; &nbsp;
                             <Link className="link search-link" to={`/roboadvisor/${props.stock}`}>
                              Advisor
                             </Link>
        </div>
    )
}




export default Searchbar
