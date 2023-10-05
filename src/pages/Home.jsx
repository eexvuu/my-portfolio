import { Component } from "react";
import Container from "../components/Container";
import HeroWrapper from "../components/hero/HeroWrapper";
import HeroImage from "../components/hero/HeroImage";
import HeroDetails from "../components/hero/HeroDetails";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data.myDetails,
    };
  }
  render() {
    return (
      <>
        <Container>
          <HeroWrapper>
            <HeroImage src={this.state.details.urlProfile} />
            <HeroDetails
              details={this.state.details}
              about={this.state.details.about}
              name={this.state.details.name}
            />
          </HeroWrapper>
        </Container>
      </>
    );
  }
}

export default Home;
