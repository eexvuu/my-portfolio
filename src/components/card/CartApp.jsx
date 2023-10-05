import { Component } from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardWrapper from "./CardWrapper";

class CartApp extends Component {
  render() {
    return (
      <>
        <CardWrapper key={this.props.key}>
          <CardImage src={this.props.src} />
          <CardBody
            title={this.props.title}
            description={this.props.description}
          />
        </CardWrapper>
      </>
    );
  }
}

export default CartApp;
