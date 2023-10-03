import React, { Component } from "react";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="bg-slate-800 flex items-center  text-white text-2xl min-h-screen">
        <div className=" mt-32 mb-8 container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 md:mx-0">
            {this.state.data.map(({ title, image, description }, index) => (
              <article
                className="overflow-hidden rounded-lg border border-slate-400 bg-slate-700 shadow-sm"
                key={index}
              >
                <img
                  alt="sertificate"
                  src={image}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-200">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
