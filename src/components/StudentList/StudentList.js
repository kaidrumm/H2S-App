// StudentList component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  ListItemSecondaryAction,
  Grid
} from "@material-ui/core";
import CheckInButton from "../CheckInButton/CheckInButton";

const StudentList = props => {
  const { classes, students, checkInToggle, history } = props;
  const studentLI = students.map((student, index) => {
    return (
      <ListItem
        onClick={() => {
          history.push(`/student/${student.login}`);
        }}
        button
        key={student.login}
      >
        <ListItemAvatar>
          <Avatar alt={student.displayname} src={student.image_url} />
        </ListItemAvatar>
        <ListItemText primary={student.displayname} secondary={student.login} />
        <ListItemSecondaryAction>
          <Grid container>
            <Grid item xs={6} className={classes.evalGrid}>
              <Button
                variant="contained"
                color="primary"
                className={classes.evalButton}
                onClick={() => {
                  console.log("Add Evaluation");
                }}
              >
                Add Eval
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.checkInButton}>
              <CheckInButton checkedIn={student.loggedIn} />
            </Grid>
          </Grid>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return <List className={classes.rootList}>{studentLI}</List>;
};

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired
  // TODO: Add 'history' proptype
};

StudentList.defaultProps = {
  students: [
    {
      login: "dstolz",
      displayname: "Donald Stolz",
      image_url: "https://cdn.intra.42.fr/users/dstolz.jpg",
      loggedIn: false
    }
  ],
  checkInToggle: name => {
    console.log(`${name}`);
  }
};

export default withRouter(withStyles(styles)(StudentList));
