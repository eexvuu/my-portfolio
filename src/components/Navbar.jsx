import { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: this.props.navigate,
      isOpen: false,
    };
  }

  render() {
    return (
      <>
        <div className="absolute z-50 left-0 right-0  top-0 drop-shadow-xl backdrop-blur-2xl bg-white/20">
          <div className="md:flex md:items-center md:justify-between  md:py-8  container mx-auto">
            <div className=" flex justify-between items-center  px-8 py-8 md:py-0 ">
              <div>
                <Link to="/" onClick={() => this.setState({ isOpen: false })}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-rocket"
                    color="orange"
                    size="xl"
                    fade
                  />
                  <span className="text-xl text-white font-bold ml-2">
                    USAMAH
                  </span>
                </Link>
              </div>
              <button
                className="md:hidden"
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                {this.state.isOpen ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-xmark"
                    color="white"
                    size="xl"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-bars"
                    color="white"
                    size="xl"
                  />
                )}
              </button>
            </div>
            <div>
              <div
                className={`flex flex-col  w-full px-0 md:px-8  ${
                  this.state.isOpen ? "block md:block" : "hidden md:block "
                }`}
              >
                {this.state.paths.map(({ to, label }, index) => (
                  <NavLink
                    onClick={() => this.setState({ isOpen: false })}
                    key={index}
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? " py-6 px-8 text-slate-800 md:rounded-md md:px-4 md:py-2 bg-orange-300 font-bold"
                        : "md:px-4 md:py-2 text-white py-6 px-8 font-bold"
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
