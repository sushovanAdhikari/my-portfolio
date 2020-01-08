import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="#link">
                  <SocialIcon url="http://linkedin.com/in/sushovan-adhikari" />
                </a>
              </li>
              <li>
                <a href="#link">
                  <SocialIcon url="https://github.com/sushovanAdhikari" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
