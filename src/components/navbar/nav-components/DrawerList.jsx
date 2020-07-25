import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const TopDivider = () => {
  return (
    <>
      <List>
        {["Subscriptions", "Pings", "Messages", "Subscribe"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};
export default TopDivider;
