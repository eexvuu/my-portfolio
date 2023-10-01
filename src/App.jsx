import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";
import { getData } from "./utils/data";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: [
        {
          label: "Home",
          to: "/",
          element: <Home data={getData().data.myDetails} />,
        },
        {
          label: "About",
          to: "/about",
          element: <About data={getData().data.myDetails} />,
        },
        {
          label: "Experience",
          to: "/experience",
          element: <Experience />,
        },
        {
          label: "Skills",
          to: "/skills",
          element: <Skills />,
        },
        {
          label: "Interest",
          to: "/interest",
          element: <Interest />,
        },
        {
          label: "Awards",
          to: "/awards",
          element: <Awards />,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Navbar navigate={this.state.navigate} />
        <Routes>
          {this.state.navigate.map(({ to, element }, index) => (
            <Route key={index} path={to} element={element} />
          ))}
        </Routes>
      </>
    );
  }
}

export default App;
library.add(fab, fas, far);
