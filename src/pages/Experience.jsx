import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import BoxWrapper from "../components/boxDetail/BoxWrapper";
import BoxApp from "../components/boxDetail/BoxApp";

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
            <BoxWrapper>
              {this.state.data.map(
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
            </BoxWrapper>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Experience;
