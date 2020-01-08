import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@material-ui/core/styles";
import background from "../Images/background.jpg";

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <header id="home" className={classes.headerImage}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#hideNav" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#aboutMe">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#myProjects">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div id="homePage" className={classes.alignment}>
            <div className={classes.root} style={content}>
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg"
              />

              <div className={classes.paper}>
                <Paper variant="outlined" className={classes.paperContent}>
                  <h2>
                    Hi, I am Sushovan. I am a recent computer science graduate
                    looking for full time opportunities.
                  </h2>
                  <hr />
                  <h3>I am a full stack web developer</h3>

                  <div className="social-links" style={socialLink}>
                    <SocialIcon
                      style={{ fill: "white" }}
                      url="http://linkedin.com/in/sushovan-adhikari"
                      className={classes.flex1}
                    />
                    <p className={classes.flex2}>
                      C# | Java | ASP.net | Angular | React | Javascript |
                      Microsoft Sql | MongoDB
                    </p>
                    <SocialIcon
                      url="https://github.com/sushovanAdhikari"
                      className={classes.flex1}
                    />
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

// --------------------------------
//homePage

const socialLink = {
  display: "flex",
  flex: "5"
};

const content = {
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column"
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  paper: {
    margin: "0 auto",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  headerImage: {
    backgroundImage: `url( ${background} )`,
    height: "300px",
    backgroundSize: "cover"
  },

  flex1: {
    flex: "1"
  },

  flex2: {
    flex: "2"
  },

  avatar: {
    height: "auto",
    width: "12em",
    margin: "0 auto"
  },

  paperContent: {
    width: "100%",
    height: "auto",
    fontFamily: "'Lusitana', serif",
    backgroundColor: "transparent",
    color: "white"
  },

  alignment: {
    display: "flex"
  }
}));
