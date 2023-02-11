import React, { Component } from "react";
import HOC from "./HOC";

class LikesCount extends Component {
  render() {
    return (
      <div>
     
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Svidjanje 👍🏻</button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(LikesCount, 0);


export default EnhancedLikes;