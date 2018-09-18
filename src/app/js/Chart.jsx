import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';

const Chart = props => {
    console.log(`Chart Component sees: `,props.data)
    return (
        <div className="container">
         <h2>Lets see some charts for {props.data.company.companyName}
         </h2>
             {props.stock}
        </div>
    )
}

export default Chart
