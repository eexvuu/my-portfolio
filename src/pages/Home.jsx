import React, { Component } from "react";
import { getData } from "../utils/data";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
    };
  }
  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
        <>
        <div className='bg-blue-500 h-screen flex justify-center items-center text-white font-bold text-2xl'>home</div>
        </>
    );
  }
}

export default Home;
