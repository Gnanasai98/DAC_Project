import React, { Component } from "react";
import NavigationBar from "../services/navbar";
import Bookingservice from "../services/Bookingservice";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      status: "",
    };
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.Signup = this.Signup.bind(this);
  }
  cancel() {
    this.props.history.push("/");
  }
  Signup = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(user.email)) {
      window.alert("Please enter a valid email address.");
      return;
    }
    Bookingservice.usersignup(user).then((res) => {
      this.setState({ status: res.data }, () => {
        window.alert(this.state.status);
        this.state.status === "registered successfully" &&
          this.props.history.push("/");
      });
    });
};
  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };
  changeUserNameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  

  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="container">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-centre">User Signup</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>UserName</label>
                  <input
                    placeholder="username"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.changeUserNameHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
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
                <div className="form-group">
                 <label>Email</label>
                  <input
                   type="email"
                   placeholder="email"
                   name="email"
                   className="form-control"
                   value={this.state.email}
                   onChange={this.changeEmailHandler}
                   required
                 />
                 </div>
                <button className="btn btn-success" onClick={this.Signup}>
                  Submit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
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

export default Signup;
