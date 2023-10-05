import { Component } from "react";

class CardWrapper extends Component {
  render() {
    return (
      <article
        className="overflow-hidden rounded-lg border border-slate-400 bg-slate-700 shadow-sm"
        key={this.props.key}
      >
        {this.props.children}
      </article>
    );
  }
}

export default CardWrapper;
