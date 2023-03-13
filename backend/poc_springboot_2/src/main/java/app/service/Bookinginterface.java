package app.service;

import app.model.*;
import java.util.List;

public interface Bookinginterface {
	List<Bookings> getall();
	String plantravel(Bookings boo);
	String adminlogin(String u,String p);
	String addbus(Busdetails b);
	String userlogin(String username,String password);
	String usersignup(Users user);
	List<Busdetails> search(String s,String d);
	List<Bookings> getBookingByUser(String name);
	Bookings getBookingByID(Long id);
	void deleteBookingByID(Long id);
}
