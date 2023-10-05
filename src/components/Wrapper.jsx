import { Component } from "react";

class Wrapper extends Component {
  render() {
    return (
      <>
        <article className="mt-28 mb-8 px-8">
          {this.props.children}
        </article>
      </>
    );
  }
}

export default Wrapper;
