import { Component } from "react";

class HeroWrapper extends Component {
  render() {
    return (
      <>
        <div className="h-screen flex items-center justify-center px-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default HeroWrapper;
