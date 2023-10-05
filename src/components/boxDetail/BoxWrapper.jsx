import { Component } from "react";
import BoxApp from "./BoxApp";

class BoxWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data,
    };
  }
  render() {
    return (
      <>
        <ul className="mt-4 space-y-2">
          {this.state.details.map(
            ({ Position, Company, Location, Type, Duration }, index) => (
              <BoxApp
                key={index}
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )}
        </ul>
      </>
    );
  }
}

export default BoxWrapper;
