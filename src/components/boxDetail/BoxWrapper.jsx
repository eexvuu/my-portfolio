import { Component } from "react";

class BoxWrapper extends Component {
  render() {
    return (
      <>
        <ul className="mt-4 space-y-2">{this.props.children}</ul>
      </>
    );
  }
}

export default BoxWrapper;
