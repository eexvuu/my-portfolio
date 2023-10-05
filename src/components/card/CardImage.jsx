import { Component } from "react";

class CardImage extends Component {
  render() {
    return (
      <img
        alt="sertificate"
        src={this.props.src}
        className="h-56 w-full object-cover"
      />
    );
  }
}

export default CardImage;
