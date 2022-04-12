import { Typography } from "@mui/material";
import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super();
  }
  state = {};
  render() {
    return (
      <>
        <div className="header">
          <Typography>{this.props.title} </Typography>
        </div>
      </>
    );
  }
}

export default Header;
