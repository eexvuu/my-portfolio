import { Component } from "react";
import Typewriter from "typewriter-effect";
import Container from "../components/Container";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.data.myDetails,
    };
  }
  render() {
    return (
      <>
        <Container>
          <div className="h-screen flex items-center justify-center px-8 ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="profile"
                  src={this.state.details.urlProfile}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24 ">
                <h2 className="text-3xl font-bold sm:text-4xl text-white">Halo,👋 Saya</h2>
                <h2 className="bg-gradient-to-r from-orange-300 via-amber-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  {this.state.details.name}
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
                <p className="mt-4 text-slate-300">
                  {this.state.details.about}
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-orange-300 px-12 py-3  text-slate-800 font-bold transition hover:bg-orange-200 focus:outline-none focus:ring focus:ring-yellow-400 text-sm"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
