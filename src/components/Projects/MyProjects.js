import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import clsx from "clsx";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";

import ASPICON from "../../Images/aspNetCore.png";
import ASPMVC from "../../Images/MMVC.jpg";
import MEAN from "../../Images/MEAN.jpg";
import MERN from "../../Images/MERN.png";
import JAVA from "../../Images/JAVA.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "0 auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: "#0b2b65",
    position: "relative",
    //marginTop: "73px",
    width: "100%"
  },
  imageCore: {
    backgroundImage: `url( ${ASPICON} )`,
    height: "300px",
    backgroundSize: "cover"
  },

  imageMEAN: {
    backgroundImage: `url( ${MEAN} )`,
    height: "211px",
    backgroundSize: "contain"
  },

  imageMERN: {
    backgroundImage: `url( ${MERN} )`,
    height: "203px",
    backgroundSize: "contain"
  },

  imageMVC: {
    backgroundImage: `url( ${ASPMVC} )`,
    height: "300px",
    backgroundSize: "cover"
  },

  imageJAVA: {
    backgroundImage: `url( ${JAVA} )`,
    height: "300px",
    backgroundSize: "cover"
  },

  grid: {
    display: "flex",
    justifyContent: "space-around"
  },
  centered: {
    display: "flex",
    justifyContent: "center"
  },
  tabs: {
    fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif ",
    letterSpacing: "2.5px",
    fontWeight: "bolder"
  },
  projects: {
    backgroundColor: "#0b2b65"
  },
  section: {
    marginTop: "2em"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function MyProjects(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <section id="myProjects">
      <TabPanel className={classes.root}>
        <section className={classes.section}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              className={classes.tabs}
            >
              <Tab className={classes.tabs} label="ASP.NET" {...a11yProps(0)} />
              <Tab
                className={classes.tabs}
                label="MEAN | MERN"
                {...a11yProps(1)}
              />
              <Tab className={classes.tabs} label="Java" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={classes.grid}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <a href="#link">
                            <SocialIcon url="https://github.com/sushovanAdhikari/SpokenPast" />
                          </a>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        // title="Shrimp and Chorizo Paella"
                        // subheader="September 14, 2016"
                      />
                      <CardMedia
                        className={(classes.media, classes.imageCore)}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {props.details.spokenPastData}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <a href="#link">
                            <SocialIcon url="https://github.com/sushovanAdhikari/radke" />
                          </a>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      />
                      <CardMedia
                        className={(classes.media, classes.imageMVC)}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {props.details.vintageData}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.grid}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <a href="#link">
                            <SocialIcon url="https://github.com/sushovanAdhikari/MEAN-frontend" />
                          </a>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      />
                      <CardMedia
                        className={(classes.media, classes.imageMEAN)}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {props.details.EMSMEANData}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <a href="#link">
                            <SocialIcon url="https://github.com/sushovanAdhikari/MERN-frontEnd" />
                          </a>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      />
                      <CardMedia
                        className={(classes.media, classes.imageMERN)}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {props.details.EMSMERNData}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </TabPanel>

            <TabPanel
              value={value}
              index={2}
              dir={theme.direction}
              className={classes.centered}
            >
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <a href="#link">
                      <SocialIcon url="https://github.com/sushovanAdhikari" />
                    </a>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  // title="Shrimp and Chorizo Paella"
                  // subheader="September 14, 2016"
                />
                <CardMedia
                  className={(classes.media, classes.imageJAVA)}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {props.details.JavaMVC}
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph></Typography>
                    <Typography paragraph></Typography>
                    <Typography></Typography>
                  </CardContent>
                </Collapse> */}
              </Card>
            </TabPanel>
          </SwipeableViews>
        </section>
      </TabPanel>
    </section>
  );
}
