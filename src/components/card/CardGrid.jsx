import { Component } from "react";
import CartApp from "./CartApp";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-0">
        {this.state.data.map(({ title, image, description }, index) => (
          <CartApp
            key={index}
            src={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    );
  }
}

export default CardGrid;
