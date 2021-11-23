import { PropTypes } from "prop-types";
import React from "react";

export default class HeroName extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>
  }
}

HeroName.propTypes = {
    name: PropTypes.string
}