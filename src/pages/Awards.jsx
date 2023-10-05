import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import CardGrid from "../components/card/CardGrid";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.awards,
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Awards</Title>
          <CardGrid data={this.state.data}></CardGrid>
        </Wrapper>
      </Container>
    );
  }
}

export default Awards;
