import { Component } from "react";

class ProfileWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      socialMedia: this.props.socialMedia,
    };
  }
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default ProfileWrapper;
