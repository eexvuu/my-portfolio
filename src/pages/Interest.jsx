import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import ImageGallery from "../components/ImageGallery";
import GridLayout from "../components/GridLayout";

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
            <GridLayout>
              {Object.keys(this.state.interest).map((key) => (
                <ImageGallery key={key} src={this.state.interest[key]} />
              ))}
            </GridLayout>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Interest;
