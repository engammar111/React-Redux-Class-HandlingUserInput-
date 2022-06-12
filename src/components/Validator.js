import React, { Component } from "react";

export default class Validator extends Component {
  state = { password: "" };
  render() {
    return (
      <div className="ui segment">
        <form className=" ui form">
          <div className="field">
            <label> Enter password</label>
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              value={this.state.password}
            />
          </div>
          {this.state.password.length < 4
            ? "password must be at least 4 chars "
            : ""}
        </form>
      </div>
    );
  }
}
