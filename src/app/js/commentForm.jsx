import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

class Comments extends React.Component {
  componentDidMount() {
    this.props.handleInputChange("comment", "");
    this.props.handleInputChange("name", "");
  }

  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.stock} />
        <input
          type="text"
          placeholder="Say something..."
          value={this.props.comment}
          onChange={evt =>
            this.props.handleInputChange("comment", evt.target.value)
          }
        />
        <button className="button" onClick={() => this.props.commentPost()}>
          POST
        </button>
      </div>
    );
  }
}

export default Comments;
