import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
const alignment = {
  position: "relative",
  width: "100%",
  fontFamily: "Lusitana, serif"
};

const contactPhone = {
  display: "flex",
  justifyContent: "center"
};

const grid = {
  padding: "0 2em"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0e2f41"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "cursive"
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact">
      <div style={alignment}>
        <Grid container spacing={3} style={grid}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h3>Feel free to contact me at</h3>
              <hr />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <div style={contactPhone}>
                    <div style={{ marginTop: "1.2em", marginRight: "1em" }}>
                      <PhoneIcon style={{ fontSize: 40 }} />
                    </div>
                    <div>
                      <h4>225-252-1747</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div style={contactPhone}>
                    <div style={{ marginTop: "1.2em", marginRight: "1em" }}>
                      <EmailIcon style={{ fontSize: 40 }} />
                    </div>
                    <div>
                      <h4>sushovan.adhikari@selu.edu</h4>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
