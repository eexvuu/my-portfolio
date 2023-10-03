import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    return (
      <>
        <div className="bg-slate-800">
          <div className="container  h-screen w-screen flex flex-col text-2xl mx-auto">
            <article className="mt-28 px-8 md:px-0">
              <h2 className="text-orange-300 font-bold text-2xl my-6">
                Experience
              </h2>
              <ul className="mt-4 space-y-2">
                {this.state.data.map(
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
                                Type === "Graduate"
                                  ? "bg-green-300"
                                  : Type === "Seasonal"
                                  ? "bg-blue-300"
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

export default Experience;
