import { Component } from "react";

class GridLayout extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 place-items-center">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default GridLayout;
