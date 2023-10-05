import { Component } from "react";

class HeroImage extends Component {
  render() {
    return (
      <>
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="profile"
            src={this.props.src}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </>
    );
  }
}

export default HeroImage;
