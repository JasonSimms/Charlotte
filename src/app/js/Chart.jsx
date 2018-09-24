import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';

const Chart = props => {
    console.log(`Chart Component sees: `,props)
        
        return (
            <div className="container">
         <h2>Herea are charts of.... 
         {props.data.company.companyName}
         </h2>
             <img src={props.data.logo.url} alt=""/>
        </div>
    )
}

export default Chart