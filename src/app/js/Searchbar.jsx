import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = props => {
    console.log(`searchbar sees query=`,props.query)
    return (
        <div className="container nav-content searchBar">
         <form className="search" 
         >
            <input
                className="input"
                value={props.query}
                onChange={event => props.handleSearchChange(event.target.value)}
                type="text"
                placeholder="Symbol"
            />
            <button className="button" onClick={props.searchItems}  value="$">$</button>
        </form>

        <Link className="link nav-link" to={`/chart/`}>
                              Charts
                             </Link>
                             &nbsp; &nbsp; &nbsp;
                     <Link className="link nav-link" to={`/trends/`}>
                              Trends
                             </Link>
                             &nbsp; &nbsp; &nbsp;
                             <Link className="link nav-link" to={`/roboadvisor/${props.stock}`}>
                              Advisor
                             </Link>
         {/* <button className="favorite">
         Fav 1
         </button>
         <button className="favorite">
         Fav 2
         </button>
         <button className="favorite">
         Fav 3
         </button> */}
        </div>
    )
}

export default Searchbar

// import React, { Component } from 'react';


// class Searchbar extends Component {
//     constructor(props) {
//         super(props);
    
//         // this.state = {
//         //   user: this._setUser(true),
//         // };
    
//         // this._setUser = this._setUser.bind(this);
   
//       }



//     render() {
//     console.log(`searchbar sees query=`,this.props.query)

//         return (
//             <div className="container nav-content search">
//           <form className="search" 
//          >
//             <input
//                 className="input"
//                 value={this.props.query}
//                 onChange={event => this.props.handleSearchChange(event.target.value)}
//                 type="text"
//                 placeholder="Symbol"
//             />
//             {/* <Link className="link" to={`/chart/${props.stock}`} > */}
//             <button className="button" onClick={this.props.searchItems}  value="$">$</button>
//             {/* </Link> */}
//         </form>
//         <Link className="link nav-link" to={`/chart/`}>
//                              Charts
//                             </Link>
//                             &nbsp; &nbsp; &nbsp;
//                     <Link className="link nav-link" to={`/trends/`}>
//                              Trends
//                             </Link>
//                             &nbsp; &nbsp; &nbsp;

//                             <Link className="link nav-link" to={`/roboadvisor/${props.stock}`}>
//                              Advisor
//                             </Link>


//          {/* <button className="favorite">
//          Fav 1
//          </button>
//          <button className="favorite">
//          Fav 2
//          </button>
//          <button className="favorite">
//          Fav 3
//          </button> */}
//          </div>
//         );
//     }
// }

// export default Searchbar;