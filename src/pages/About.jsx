import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import BoxWrapper from "../components/boxDetail/BoxWrapper";
import ProfileApp from "../components/profile/ProfileApp";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data.myDetails,
      socialMedia: this.props.data.socialMediaUrls,
      educationDetails: this.props.data.educationDetails,
    };
  }
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>About Me</Title>
            <ProfileApp
              details={this.state.details}
              socialMedia={this.state.socialMedia}
              about={this.state.details.about}
              interest={this.state.details.interest}
            />
            
            <Title>Education</Title>
            <BoxWrapper data={this.state.educationDetails} />
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default About;
