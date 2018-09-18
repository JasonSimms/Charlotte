import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = props => {
    return (
        <div className="container nav-content">
         <form action="">
         <input type="text" placeholder="Search NASDAQ Tickers"/>
         <button type="submit">$</button>
         </form>
         <button className="favorite">
         Fav 1
         </button>
         <button className="favorite">
         Fav 2
         </button>
         <button className="favorite">
         Fav 3
         </button>
        </div>
    )
}

export default Searchbar
