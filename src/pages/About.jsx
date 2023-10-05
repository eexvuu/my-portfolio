import { Component } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import BoxWrapper from "../components/boxDetail/BoxWrapper";
import BoxApp from "../components/boxDetail/BoxApp";

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
            <div className="flex items-center gap-4">
              <img
                alt="Developer"
                src={this.state.details.profile}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  {this.state.details.name}
                </h3>

                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    {Object.keys(this.state.socialMedia).map((key) => (
                      <li className="p-1 leading-none" key={key}>
                        <a
                          href={this.state.socialMedia[key]}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-gray-300"
                        >
                          {key}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="my-6 text-slate-300 text-base md:text-lg">
              {this.state.details.about} {this.state.details.interest}
            </p>

            <Title>Education</Title>
            <BoxWrapper>
              {this.state.educationDetails.map(
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

export default About;
