import React, { Component } from "react";
import "./Entry.css";
import infoPage from "../rawHTML/infoPage.html";
import { Router, browserHistory } from "react-router";
import { withRouter, PropTypes } from "react-router-dom";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.appName = props.appName;
    this.redirectName = props.redirect;
  }

  static propTypes = {
    match: <PropTypes className="object isRequired" />,
    location: <PropTypes className="object isRequired" />,
    history: <PropTypes className="object isRequired" />
  };

  buttonClicked() {
    this.props.history.push("/" + this.appName);
  }

  render() {
    return (
      <div className="Entry" onClick={this.buttonClicked}>
        <dt>
          <span className="tile" role="img" aria-label="Click" />
          <span> {this.appName} </span>
        </dt>
        <dd>FSE</dd>
        <dd>
          <button className=" button" onClick={this.buttonClicked}>
            Environments
          </button>
        </dd>
      </div>
    );
  }
}
export default withRouter(Entry);
