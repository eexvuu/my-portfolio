import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
  render() {
    return (
      <>
        <div className="grid h-screen px-4 bg-slate-800 place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-gray-500">We can't find that page.</p>

            <Link
              to="/"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-orange-300 rounded hover:bg-orange-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </>
    );
  }
}
