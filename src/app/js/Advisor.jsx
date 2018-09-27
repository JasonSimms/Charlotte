import React from "react";
import { PromiseProvider } from "mongoose";
import Axios from "axios";
import api from "./utils/api";


class Advisor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.options.underlyingSymbol != this.props.stock)this.props.searchO();
    console.log(this.props.options, `options data?`)
  }
  render() {
    let content;
    let optionsTable = "options data Loading"
//OPTIONS INFO?
    if (this.props.options !== "no options") {
        let nextEarningsDisplay = "not Available!"
        let nextEarnings = this.props.options.quote.earningsTimestampStart
        if(this.props.options.quote.earningsTimestampStart) nextEarningsDisplay = new Date(nextEarnings*1000).toString().slice(0,10)
        optionsTable = (
        `We've got info! Next Earnings is 
        ${nextEarningsDisplay}
        `
    )
console.log(this.props.options)}

    if (1 > 0) {
      content = "something nice";
    } else {
      content = "something bad";
    }

    // console.log(this.props)
    return <div>{content} 
    <br/><br/>      
    {this.props.stock}  
    <br/><br/>  
    {optionsTable}
    </div>;
  }


  
}

export default Advisor;
