import { Component } from "react";

class BoxContainer extends Component {
  render() {
    return (
      <>
        <li key={this.props.key}>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-orange-300"
          >
            <div className="flex flex-col md:justify-between md:flex-row">
                
                {this.props.children}
            </div>
          </a>
        </li>
      </>
    );
  }
}

export default BoxContainer;
