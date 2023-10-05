import { Component } from "react";

class CardGrid extends Component {
  render() {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-0">
        {this.props.children}
      </div>
    );
  }
}

export default CardGrid;
