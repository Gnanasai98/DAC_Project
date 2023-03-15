import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Userbooking extends Component {
    constructor(props){
        super(props)
        this.state={
            bookings:[],
            currentPage: 1,
            itemsPerPage: 5
        }
        this.deleteBooking = this.deleteBooking.bind(this);
        this.getBookingById = this.getBookingById.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        Bookingservice.userbooking(window.localStorage.getItem("x")).then((res) => {
            this.setState({bookings: res.data});
        });
    }

    deleteBooking(id){
        Bookingservice.deleteBooking(id).then( res => {
            this.setState({bookings: this.state.bookings.filter(booking => booking.id !== id)});
        });
    }
    
    getBookingById(id){
        this.props.history.push(`/view/${id}`);
        this.props.history.push(`/print`);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { bookings, currentPage, itemsPerPage } = this.state;

        // Logic for displaying current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bookings.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <h2 className="text-center">Booking list</h2>
                <div className="row">
                    <table style={{marginLeft: "50px"}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>source</th>
                                <th>destination</th>
                                <th>date</th>
                                <th>noofpassengers</th>
                                <th>bus</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(booking => (
                                <tr key={booking.id}>
                                    <td>{booking.username}</td> 
                                    <td>{booking.source}</td>
                                    <td>{booking.destination}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.noofpassengers}</td>
                                    <td>{booking.buscode}</td>
                                    <td>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteBooking(booking.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.getBookingById(booking.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ul id="page-numbers" className="pagination">
                        {pageNumbers.map(number => {
                            return (
                                <li key={number} className="page-item">
                                    <button id={number} onClick={this.handleClick} className="page-link">
                                        {number}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Userbooking;
