import React, { Component } from "react";
import Bookingservice from "../services/Bookingservice";
import backgroundImage1 from "../components/login2.jpg";

class Adminlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      status: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.login = this.login.bind(this);
  }

  cancel() {
    this.props.history.push("/");
  }

  login = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let pass = this.state.password;
    Bookingservice.adminlogin(name, pass).then((res) => {
      this.setState({ status: res.data });
      window.alert(this.state.status);
      this.state.status === "login successful" &&
        this.props.history.push("/afterlogin");
    });
  };

  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <img
          src={backgroundImage1}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />
        <div
          className="container"
          style={{ margin: 0, padding: 0, boxSizing: "border-box" }}
        >
          <div
            className="card col-md-6"
            style={{
              position: "absolute",
              top: "56%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "transparent",
              backgroundClip: "inherit",
              maxWidth: "30%",
              border: "none",
              margin: 0,
              padding: 0,
              boxSizing: "border-box"
            }}
          >
            <h3 className="text-center" style={{ color: "white" }}>
              Admin Login
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label style={{ color: "white" }}>Name</label>
                  <input
                    placeholder="name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.changeNameHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "white" }}>Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.changePasswordHandler}
                    required
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={this.login}
                  style={{ marginRight: "10px" }}
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminlogin;
