import { Component } from "react";
import BoxContainer from "./BoxContainer";
import BoxTitle from "./BoxTitle";
import BoxLabel from "./BoxLabel";

class BoxApp extends Component {
  render() {
    return (
      <>
        <BoxContainer key={this.props.key}>
          <BoxTitle
            position={this.props.position}
            company={this.props.company}
            location={this.props.location}
          />
          <BoxLabel type={this.props.type} duration={this.props.duration} />
        </BoxContainer>
      </>
    );
  }
}

export default BoxApp;
