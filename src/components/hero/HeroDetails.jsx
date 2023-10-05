import { Component } from "react";
import Typewriter from "typewriter-effect";

class HeroDetails extends Component {
  render() {
    return (
      <>
        <div className="lg:py-24 ">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Halo,👋 Saya
          </h2>
          <h2 className="bg-gradient-to-r from-orange-300 via-amber-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            {this.props.name}
          </h2>

          <p className="mt-4 text-slate-300">
            <Typewriter
              options={{
                strings: ["FrontEnd Developer", "React Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="mt-4 text-slate-300">{this.props.about}</p>

          <a
            href="#"
            className="mt-8 inline-block rounded bg-orange-300 px-12 py-3  text-slate-800 font-bold transition hover:bg-orange-200 focus:outline-none focus:ring focus:ring-yellow-400 text-sm"
          >
            Contact me
          </a>
        </div>
      </>
    );
  }
}

export default HeroDetails;
