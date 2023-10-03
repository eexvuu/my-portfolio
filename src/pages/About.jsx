import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

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
        <div className="bg-slate-800">
          <div className="container  h-screen w-screen flex flex-col items-center text-2xl mx-auto">
            <article className="mt-28 px-8 md:px-0">
              <h2 className="text-orange-300 font-bold text-2xl my-6">
                About Me
              </h2>
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

              <span className="text-orange-300 font-bold text-2xl">
                Education
              </span>
              <ul className="mt-4 space-y-2">
                {this.state.educationDetails.map(
                  ({ Position, Company, Location, Type, Duration }, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-orange-300"
                      >
                        <div className="flex flex-col md:justify-between md:flex-row">
                          <div>
                            {" "}
                            <strong className="font-medium text-white text-xl">
                              {Position}
                            </strong>
                            <p className="mt-1 text-xs font-medium text-gray-300">
                              {Company}, {Location}
                            </p>
                          </div>

                          <div className="mt-2 md:mt-0">
                            <span
                              className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm text-slate-800 ${
                                Type == "Graduate"
                                  ? "bg-green-300"
                                  : "bg-yellow-300"
                              }`}
                            >
                              {Type}
                            </span>
                            <p className="mt-1 text-xs font-medium text-slate-400">
                              {Duration}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </article>
          </div>
        </div>
      </>
    );
  }
}

export default About;
