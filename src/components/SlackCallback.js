import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SlackCallback = (props) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    props.setSlackState(location.search);
    history.push("/profile");
  }, [location, history, props]);

  return <div></div>;
};

export default SlackCallback;