import { Component } from "react";

class BoxLabel extends Component {
  render() {
    return (
      <>
        <div className="mt-2 md:mt-0">
          <span
            className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm text-slate-800 ${
              this.props.type === "Graduate"
                ? "bg-green-300"
                : this.props.type === "Seasonal"
                ? "bg-blue-300"
                : "bg-yellow-300"
            }`}
          >
            {this.props.type}
          </span>
          <p className="mt-1 text-xs font-medium text-slate-400">
            {this.props.duration}
          </p>
        </div>
      </>
    );
  }
}

export default BoxLabel;
