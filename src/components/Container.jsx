import { Component } from "react";

class Container extends Component {
  render() {
    return (
      <>
        <div className="bg-slate-800">
          <div className="container  min-h-screen flex flex-col text-2xl mx-auto">
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default Container;
