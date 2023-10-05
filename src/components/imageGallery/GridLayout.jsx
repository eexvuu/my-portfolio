import { Component } from "react";
import ImageGallery from "./ImageGallery";

class GridLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 place-items-center">
          {Object.keys(this.state.data).map((key) => (
            <ImageGallery key={key} src={this.state.data[key]} />
          ))}
        </div>
      </>
    );
  }
}

export default GridLayout;
