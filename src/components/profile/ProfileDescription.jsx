import { Component } from "react";

class ProfileDescription extends Component {
  render() {
    return (
      <>
        <p className="my-6 text-slate-300 text-base md:text-lg">
          {this.props.about} {this.props.interest}
        </p>
      </>
    );
  }
}

export default ProfileDescription;
