import React from "react";
import PropTypes from "prop-types";

const ListItem = (props) => {
  console.log(props);
  return <li data-id={props.theProp}>{props.children}</li>;
};

ListItem.defaultProps = {
  theProp: 5,
};

ListItem.propTypes = {
  theProp: PropTypes.number,
  children: PropTypes.number,
};

export default ListItem;
