import React from "react";
import { PromiseProvider } from "mongoose";
import Axios from "axios";
import api from "./utils/api";


class Advisor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.options === "no options")this.props.searchO();
    console.log(this.props.options, `options data?`)
  }
  render() {
    let content;

//OPTIONS INFO?


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
    {/* {this.props.options} */}
    </div>;
  }


  
}

export default Advisor;
