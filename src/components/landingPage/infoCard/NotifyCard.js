import React from "react";
import "./infoCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontFamily: "Pacifico cursive",
    fontSize: "32px",
    fontWeight: 400,
    height: "40px",
  },
  p: {
    fontSize: "1.5rem",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

const OrganizeCard = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:827px)");

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={
        matches
          ? {
              width: "25vw",
              padding: "2rem",
              height: "80vh",
              backgroundColor: "#00ADB5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '2rem'
            }
          : { width: "90vw", backgroundColor: "#00ADB5", marginBottom: "1rem" }
      }
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "white",
            borderRadius: "1rem",
            marginBottom: "1rem",
          }}
        >
          <img
            src="/images/at-solid.svg"
            alt="solid"
            style={{
              height: "35vh",
            }}
          />
        </div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Notification
        </Typography>

        <Typography variant="body2" component="p" className={classes.p}>
          Never miss a ping directed to you. Snooze it and get right back to
          work!
        </Typography>
      </CardContent>
    </Card>
  );
};
export default OrganizeCard;
