import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "2vh"
  },
  clearFloat: {
    clear: "both"
  }
}));

const imgStyle = {
  //width: "28vw",
  border: "transparent",
  borderRadius: "100%",
  height: "180px",
  width: "205px",
  margin: "0 auto"
};

const aboutMe = {
  display: "flex",
  flex: "3",
  flexDirection: "row",
  marginTop: "4em",
  marginBottom: "5em",
  backgroundColor: "transparent"
};

const box1 = {
  display: "flex",
  flex: "1",
  margin: "0 auto",
  float: "right"
};

const box2 = {
  display: "flex",
  flex: "2",
  flexDirection: "column",
  background: "transparent",
  color: "white"
};

export default function ImageAvatars() {
  const classes = useStyles();
  return (
    <section id="aboutMe">
      <div>
        <Grid container justify="center" alignItems="center" style={aboutMe}>
          <Grid className={classes.clearFloat} item xs={12} sm={3}>
            <div style={box1} id="aboutMeImageBox">
              <img
                id="profile"
                alt="Profile"
                style={imgStyle}
                src={require("/Users/sushovanadhikari/Documents/my-portfolio/src/Images/grad copy.JPG")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} style={box2}>
              <Typography variant="h5" component="h3" id="title">
                About Me
              </Typography>
              <Typography component="p" id="para">
                I graduated with a computer science degree from Southeastern
                Louisiana University in Dec of 2019. I have had opportunities to
                work with clients developing websites and I have grown a passion
                for it. Aside from my passion in programming, I also like
                reading books, travelling and playing music.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
