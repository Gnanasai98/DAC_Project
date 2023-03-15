import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.Adminlogin = this.Adminlogin.bind(this);
    this.Userlogin = this.Userlogin.bind(this);
    this.Signup = this.Signup.bind(this);
    this.About = this.About.bind(this);
  }

  Adminlogin() {
    this.props.history.push('/adminlogin');
  }

  Userlogin() {
    this.props.history.push('/userlogin');
  }

  Signup() {
    this.props.history.push('/signup');
  }

  About() {
    this.props.history.push('/aboutus');
  }

  render() {
    return (

<div className="homepage-container" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}>
        <video id="bg-video" autoPlay muted loop style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <source src="video\video.mp4" type="video/mp4" />
        </video>
        <Navbar bg="transparent" variant="dark" expand="md" className="justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link onClick={this.About} style={{ color: 'white' }}>BTTS</Nav.Link>
              <Nav.Link onClick={this.Adminlogin} style={{ color: 'white' }}>Admin Login</Nav.Link>
              <Nav.Link onClick={this.Userlogin} style={{ color: 'white' }}>User Login</Nav.Link>
              <Nav.Link onClick={this.Signup} style={{ color: 'white' }}>Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Homepage;