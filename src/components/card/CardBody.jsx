import { Component } from "react";

class CardBody extends Component {
  render() {
    return (
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-bold text-white">{this.props.title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-200">
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default CardBody;
