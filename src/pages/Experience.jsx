import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import BoxWrapper from "../components/boxDetail/BoxWrapper";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.workDetails,
    };
  }
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>Experience</Title>
            <BoxWrapper data={this.state.data} />
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Experience;
