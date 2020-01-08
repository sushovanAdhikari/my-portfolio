import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/Projects/MyProjects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Header from "./layout/Header";
import Footer from "./components/Footer";
import details from "./Details";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AboutMe />
            <MyProjects details={details} />
            <Resume />
            <Contact />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
