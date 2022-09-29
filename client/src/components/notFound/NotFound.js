import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.centered}>
        <h2>Page Not Found :(</h2>
      </div>
    </div>
  );
};

export default NotFound;
