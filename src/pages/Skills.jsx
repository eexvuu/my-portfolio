import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import ImageGallery from "../components/ImageGallery";
import GridLayout from "../components/GridLayout";

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
            <GridLayout>
              {Object.keys(this.state.skills).map((key) => (
                <ImageGallery key={key} src={this.state.skills[key]} />
              ))}
            </GridLayout>
            <Title>Tools</Title>
            <GridLayout>
              {Object.keys(this.state.tools).map((key) => (
                <ImageGallery key={key} src={this.state.tools[key]} />
              ))}
            </GridLayout>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Skills;
