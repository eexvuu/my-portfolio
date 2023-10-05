import { Component } from "react";
import ProfileWrapper from "./ProfileWrapper";
import ProfileDescription from "./ProfileDescription";

class ProfileApp extends Component {
  render() {
    return (
      <>
        <ProfileWrapper
          details={this.props.details}
          socialMedia={this.props.socialMedia}
        />
        <ProfileDescription
          about={this.props.details.about}
          interest={this.props.details.interest}
        />
      </>
    );
  }
}

export default ProfileApp;
