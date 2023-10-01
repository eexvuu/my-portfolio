import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data,
    };
  }
  render() {
    return (
      <>
        <div className="bg-blue-500 h-screen flex flex-col justify-center items-center text-white font-bold text-2xl">
          <p>{this.state.details.name}</p>
          <p>{this.state.details.urlProfile}</p>
          <p>{this.state.details.about}</p>
          <p>{this.state.details.interest}</p>
          
        </div>
      </>
    );
  }
}

export default Home;
