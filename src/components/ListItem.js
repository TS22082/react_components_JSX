import React from "react";

const ListItem = (props) => {
  return <li data-id={props.anotherProp}>{props.aProp}</li>;
};

export default ListItem;
