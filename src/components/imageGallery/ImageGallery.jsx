import { Component } from "react";

class ImageGallery extends Component {
  render() {
    return (
      <>
        <div
          key={this.props.key}
          className="rounded-lg border border-gray-700 p-8 hover:border-orange-300 w-full h-48 flex items-center justify-center"
        >
          <img alt="Developer" src={this.props.src} />
        </div>
      </>
    );
  }
}

export default ImageGallery;
