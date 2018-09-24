import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = props => {
    return (
        <div className="container nav-content">
         <form className="search" 
        //  onSubmit={props.searchItems}
         >
            <input
                className="input"
                value={props.query}
                onChange={event => props.handleSearchChange(event.target.value)}
                type="text"
                placeholder="name"
            />
            <Link className="link" to={`/chart/${props.stock}`} >
            <button type="submit" className="button" onClick={props.searchItems}  value="$">$</button>
            </Link>
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
