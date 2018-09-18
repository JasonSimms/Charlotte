import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';

const Chart = props => {
    return (
        <div className="container">
         <h2>Lets see some charts for that ticker! 
         </h2>
             {props.stock}
             {props.data.quote.symbol}
        </div>
    )
}

export default Chart
