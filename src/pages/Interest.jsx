import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import GridLayout from "../components/imageGallery/GridLayout";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: this.props.data.skills,
    };
  }
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>Interest</Title>
            <GridLayout data={this.state.interest} />
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Interest;
