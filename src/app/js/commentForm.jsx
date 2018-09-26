import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

class Comments extends React.Component {
  componentDidMount() {
    this.props.handleInputChange("comment", "");
    // this.props.handleInputChange("displayname", "");
  }

  render() {
    let commentform;
    if (this.props.displayname) {commentform = (<div className="cardbox">
      <input className="input cominput"
      type="text"
      placeholder="Share some knowledge with your comrades!"
      value={this.props.comment}
      onChange={evt =>
        this.props.handleInputChange("comment", evt.target.value)
      }
      />
    <button className="button" onClick={() => this.props.commentPost()}>
      POST
      
    </button></div>)} else{ commentform = (<p>Login to Share Your Opinion!</p>)}


    return (
      <div className="container" >
  
        {commentform}
      </div>
    );
  }
}

export default Comments;
