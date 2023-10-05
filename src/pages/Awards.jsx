import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import CardGrid from "../components/card/CardGrid";
import CartApp from "../components/card/CartApp";

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
          <CardGrid>
            {this.state.data.map(({ title, image, description }, index) => (
              <CartApp
                key={index}
                src={image}
                title={title}
                description={description}
              />
            ))}
          </CardGrid>
        </Wrapper>
      </Container>
    );
  }
}

export default Awards;
