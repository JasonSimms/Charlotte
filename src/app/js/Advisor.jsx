import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';

const Advisor = props => {
    let theLocal = JSON.parse(localStorage.getItem('thing'))
    // console.log(typeof theLocal)
    // console.log(theLocal.company)
console.log(props)
    // console.log(`Advisor Component sees: `,props.data)
    return (
        <div className="container">
         <h2> Advisors of.... 
         {/* {theLocal.company.symbol} */}
         {/* {theLocal.company.website} */}

         </h2>
             {/* <img src={props.data.logo.url} alt=""/> */}
        </div>
    )
}

export default Advisor
