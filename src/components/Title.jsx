import { Component } from "react";

class Title extends Component {
  render() {
    return (
      <h2 className="text-orange-300 font-bold text-3xl my-6">
        {this.props.children}
      </h2>
    );
  }
}

export default Title;
