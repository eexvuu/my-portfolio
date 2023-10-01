import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Navbar extends Component {
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
        <div className="absolute m-auto left-0 right-0  ">
          <div className="md:flex md:items-center md:justify-between md:bg-white md:py-6 md:px-8">
            <div className=" flex justify-between items-center bg-white px-8 py-6 md:py-0 md:px-0">
              <div>
                <Link to="/" onClick={() => this.setState({ isOpen: false })}>
                  Logo
                </Link>
              </div>
              <button
                className="md:hidden"
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                {this.state.isOpen ? (
                  <FontAwesomeIcon icon="fa-solid fa-xmark" />
                ) : (
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
                )}
              </button>
            </div>
            <div>
              <div
                className={`flex flex-col  bg-white w-full  ${
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
                        ? "bg-red-500 py-6 px-8 text-white md:rounded-md md:px-4 md:py-2"
                        : "md:px-4 md:py-2 text-blue-500 py-6 px-8"
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
