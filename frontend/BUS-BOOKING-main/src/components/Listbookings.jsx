import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Listbookings extends Component {
    constructor(props){
        super(props)
        this.state={
            bookings:[],
            currentPage: 1, // current page number
            itemsPerPage: 5 // number of items to display per page
        }
    }

    componentDidMount(){
        Bookingservice.getbookings().then((res) => {
            this.setState({bookings: res.data});
        });
    }

    render() {
        const { bookings, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

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
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.username}</td>
                                    <td>{booking.source}</td>
                                    <td>{booking.destination}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.noofpassengers}</td>
                                    <td>{booking.buscode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button disabled={currentPage === 1} onClick={() => this.setState({currentPage: currentPage - 1})}>
                            Previous
                        </button>
                        <button disabled={currentItems.length < itemsPerPage} onClick={() => this.setState({currentPage: currentPage + 1})}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listbookings;
