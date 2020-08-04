import React from "react";
import PropTypes from "prop-types";

const UnorderedList = (props) => {
  return <ul>{props.children}</ul>;
};

UnorderedList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default UnorderedList;
