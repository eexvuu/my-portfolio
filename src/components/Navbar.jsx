import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const activeClassName = "bg-red-500 p-2 text-white";
    const notActiveClassName = "text-blue-500 p-2";
    return (
      <>
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/interest"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              Interest
            </NavLink>
            <NavLink
              to="/awards"
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              Awards
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
