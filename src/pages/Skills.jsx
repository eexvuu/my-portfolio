import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.data.skills,
      tools: this.props.data.tools,
    };
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="bg-slate-800">
          <div className="container  min-h-screen flex flex-col text-2xl mx-auto">
            <article className="mt-28 mb-8 px-8 md:px-0">
              <h2 className="text-orange-300 font-bold text-2xl my-6">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
                {Object.keys(this.state.skills).map((key) => (
                  <div
                    key={key}
                    className="rounded-lg border border-gray-700 p-8 hover:border-orange-300 max-w-[200px] max-h-[200px]"
                  >
                    <img alt="Developer" src={this.state.skills[key]} />
                  </div>
                ))}
              </div>
              <h2 className="text-orange-300 font-bold text-2xl my-6">Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
                {Object.keys(this.state.tools).map((key) => (
                  <div
                    key={key}
                    className="rounded-lg border border-gray-700 p-8 hover:border-orange-300 max-w-[200px] max-h-[200px]"
                  >
                    <img alt="Developer" src={this.state.tools[key]} />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
