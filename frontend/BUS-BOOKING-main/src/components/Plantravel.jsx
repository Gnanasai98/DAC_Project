import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Plantravel extends Component {
    constructor(props){
        super(props)
        this.state={
            bus:[],
            username:'',
            source:'',
            destination:'',
            date:'',
            noofpassengers:0,
            buscode:0
            }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changeSourceHandler=this.changeSourceHandler.bind(this);
        this.changeDestinationHandler=this.changeDestinationHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changePassengersHandler=this.changePassengersHandler.bind(this);
        this.changeBuscodeHandler=this.changeBuscodeHandler.bind(this);
        this.savetravel=this.savetravel.bind(this);
        this.search=this.search.bind(this);
    }
    search = (e) =>{
        e.preventDefault();
        let s=this.state.source;
        let d=this.state.destination;
        Bookingservice.search(s,d).then((res) =>{
            this.setState({bus:res.data});
        });
    }
    savetravel = (e) => {
        e.preventDefault();
        let booking={username:window.localStorage.getItem("x"),source:this.state.source,destination:this.state.destination,date:this.state.date,noofpassengers:this.state.noofpassengers,buscode:this.state.buscode};
        console.log('booking => ' + JSON.stringify(booking));

        Bookingservice.plan(booking).then(res =>{
                this.props.history.push('/afteruserlogin');
                console.log("success");
                window.alert("success");
        });
    }
    cancel(){
        this.props.history.push('/');
    }
    changeUserNameHandler = (event) => {
            this.setState({username:event.target.value});
    }
    changeSourceHandler = (event) => {
        this.setState({source:event.target.value});
}
changeDestinationHandler = (event) => {
    this.setState({destination:event.target.value});
}
changeDateHandler = (event) => {
    this.setState({date:event.target.value});
}
changePassengersHandler = (event) => {
    this.setState({noofpassengers:event.target.value});
}
changeBuscodeHandler = (event) => {
    this.setState({buscode:event.target.value});
}
    render() {
        
        return (
            <div>
                
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-centre">Plan travel</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                <label>username</label>
                                <input placeholder="Username" name="userName" className="form-control" 
                                                value={window.localStorage.getItem("x")} onChange={this.changeUserNameHandler}/>

                                </div>
                                <div className="form-group">
                                <label>source</label>
                                <input placeholder="source" name="source" className="form-control" 
                                                value={this.state.source} onChange={this.changeSourceHandler}/>

                                </div>
                                <div className="form-group">
                                <label>destination</label>
                                <input placeholder="destination" name="destination" className="form-control" 
                                                value={this.state.destination} onChange={this.changeDestinationHandler}/>
                                <button onClick={this.search}>search</button>
                                <div>
                    <h2 className="text-center">Bus list</h2>
                    <div className="row">
                    <table style={{marginLeft: "10px"}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>buscode</th>
                                <th>source</th>
                                <th>destination</th>
                                <th>time</th>
                                <th>price</th>
                                <th>select</th>
                            
                            </tr>


                        </thead>
                        <tbody>

                            {
                                this.state.bus.map(
                                    bus =>
                                    <tr key= {bus.id}>
                                        <td> {bus.code} </td> 
                                        <td> {bus.source} </td>
                                        <td> {bus.destination} </td>
                                        <td> {bus.time} </td>
                                        <td> {bus.price} </td>
                                        <td>
                                             <div className="form-check">
                                                <input type="radio" name="buscode" value={bus.code.toString()} checked={this.state.buscode === bus.code.toString()} onChange={this.changeBuscodeHandler} />
                                                 <label className="form-check-label">{bus.code}</label>
                                             </div>
                                       </td>


                                    </tr>
                                )
                            }

                        </tbody>



                    </table>


                    </div>
            </div>

                                </div>
                                <div className="form-group">
                                <label>Date</label>
                                <input type="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>

                                </div>
                                <div className="form-group">
                                <label>numberofpassengers</label>
                                <input placeholder="noof passengers" name="noof passengers" className="form-control" 
                                                value={this.state.noofpassengers} onChange={this.changePassengersHandler}/>

                                </div>
                                
                                <button className="btn btn-success" onClick={this.savetravel}>Submit</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Plantravel;