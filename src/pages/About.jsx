import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data,
    };
  }
  render() {
    return (
      <div className="bg-blue-500 h-screen flex justify-center items-center text-white font-bold text-2xl">
        <h1>{this.state.details.name}</h1>
      </div>
    );
  }
}

export default About;
