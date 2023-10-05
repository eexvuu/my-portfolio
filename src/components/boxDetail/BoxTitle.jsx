import { Component } from "react";

class BoxTitle extends Component {
  render() {
    return (
      <>
        <div>
          <strong className="font-medium text-white text-xl">
            {this.props.position}
          </strong>
          <p className="mt-1 text-xs font-medium text-gray-300">
            {this.props.company}, {this.props.location}
          </p>
        </div>
      </>
    );
  }
}

export default BoxTitle;
