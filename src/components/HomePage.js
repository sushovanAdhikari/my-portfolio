import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { SocialIcon } from "react-social-icons";

const content = {
  width: "100%",
  position: "absolute",
  marginTop: "150px",
  display: "flex",
  height: "100%",
  flexDirection: "column"
};

const socialLink = {
  display: "flex",
  flex: "5"
};

const flex1 = {
  flex: "1"
};

const flex2 = {
  flex: "2"
};

const avatar = {
  height: "auto",
  width: "12em",
  margin: "0 auto"
};

const paperContent = {
  width: "100%",
  height: "auto"
};

const alignment = {
  display: "flex"
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
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div id="homePage" style={alignment}>
      <div className={classes.root} style={content}>
        <Avatar
          style={avatar}
          alt="Remy Sharp"
          src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg"
        />

        <div className={classes.paper}>
          <Paper variant="outlined" style={paperContent}>
            <h1>
              Hi, I am Sushovan. I am recent computer science graduate looking
              for full time opportunities.{" "}
            </h1>
            <h2>Full Stack Developer</h2>
            <hr />
            <h3>I am passionate about programming</h3>

            <div class="social-links" style={socialLink}>
              <SocialIcon
                url="http://linkedin.com/in/sushovan-adhikari"
                style={flex1}
              />
              <p style={flex2}>
                C# | ASP.net | Ruby on Rails | React | Javascript | Microsoft
                Sql | MongoDB
              </p>
              <SocialIcon
                url="https://github.com/sushovanAdhikari"
                style={flex1}
              />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
