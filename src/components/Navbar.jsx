import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: this.props.navigate,
    };
  }

  render() {
    return (
      <>
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div className="flex gap-2">
            {this.state.paths.map(({ to, label }, index) => (
              <NavLink
                key={index}
                to={to}
                className={({ isActive }) =>
                  isActive ? "bg-red-500 p-2 text-white" : "text-blue-500 p-2"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
