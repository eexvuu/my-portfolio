import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import GridLayout from "../components/imageGallery/GridLayout";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.data.skills,
      tools: this.props.data.tools,
    };
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>Skills</Title>
            <GridLayout data={this.state.skills} />
            <Title>Tools</Title>
            <GridLayout data={this.state.tools} />
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Skills;
