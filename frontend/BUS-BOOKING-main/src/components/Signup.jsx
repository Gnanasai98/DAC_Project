import React, { Component } from "react";
import Bookingservice from "../services/Bookingservice";
import backgroundImage2 from "../components/signup1.jpg";
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
      this.setState({ status: res.data });
      window.alert(this.state.status);
      this.state.status === "registered successfully" &&
        this.props.history.push("/");
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

<div style={{ height: "100vh", overflow: "hidden" }}>
        <img
          src={backgroundImage2}
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
           <div className="card col-md-6" style={{ position: "absolute", top: "48%", left: "48%", 
        transform: "translate(-50%, -50%)", background: "transparent", backgroundClip: "inherit", maxWidth: "30%", border:"none" }}
        >
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
