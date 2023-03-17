import React, { Component } from 'react';
import backgroundImage1 from "../components/admin.jpg";

class Afterlogin extends Component {
    constructor(props){
        super(props)
        
        this.state={
            bookings:[]
            
        }
        this.bookings=this.bookings.bind(this);
        this.registeredusers=this.registeredusers.bind(this);
        this.savebus=this.savebus.bind(this);
        this.logout=this.logout.bind(this);
    }
    savebus(){
        this.props.history.push('/addbus');
    }
    
    bookings(){
        this.props.history.push('/bookings');
    }
    registeredusers(){
        this.props.history.push('/plan-travel');
    }
    logout(){
        this.props.history.push('/');
    }

    
    render() {
        return (
<<<<<<< Updated upstream
            <div className="btn-group-vertical">

             <button className="btn btn-primary" onClick={this.bookings}>All bookings</button>

             <br></br> 
             <button className="btn btn-primary" onClick={this.savebus}>Add bus</button> 
             <br></br> 
             <button className="btn btn-primary" onClick={this.logout}>Logout</button>   
=======
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
            <div style={{ position: "relative", zIndex: 1 }}>
                <button className="btn btn-primary" onClick={this.bookings}>All bookings</button>
                <br></br> 
                <br></br>
                <button className="btn btn-primary" onClick={this.savebus}>Add bus</button> 
                <br></br> 
                <br></br> 
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>   
>>>>>>> Stashed changes
            </div>
            </div>
        );
    }
}

export default Afterlogin;