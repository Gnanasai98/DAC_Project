package app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.service.*;
import app.model.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class Bookingcontroller {
	
	@Autowired
	private Bookinginterface s;
	
	@GetMapping("/bookings")
	public List<Bookings> get()
	{
		return s.getall();
				
	}
	@GetMapping("/getusernamebookings/{username}")
	public List<Bookings> getUserBookings(@PathVariable(name="username")String name)
	{
		return s.getBookingByUser(name);
				
	}
	@PostMapping("/bookings")
	public String plantravel(@RequestBody Bookings boo)
	{
		return s.plantravel(boo);
	}
	@PostMapping("/bookings/{name}/{pass}")
	public String adminlogin(@PathVariable(name="name") String name,@PathVariable(name="pass") String pass)
	{
		return s.adminlogin(name, pass);
	}
	@PostMapping("/bookings/addbus")
	public String addbusdetails(@RequestBody Busdetails bus)
	{
		return s.addbus(bus);
	}
	@GetMapping("/bookings/userlogin/{username}/{password}")
	public String userlogin(@PathVariable(name="username") String name,@PathVariable(name="password") String pass) {
		return s.userlogin(name, pass);
	}
	@PutMapping("/bookings/signup")
		public String usersignup(@RequestBody Users user) {
				return s.usersignup(user);
	}
	@GetMapping("/bookings/search/{source}/{destination}")
	public List<Busdetails> searching(@PathVariable(name="source") String source,@PathVariable(name="destination") String destination){
		return s.search(source, destination);
				}
}
