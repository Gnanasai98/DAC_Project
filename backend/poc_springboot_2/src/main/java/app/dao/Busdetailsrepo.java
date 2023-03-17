package app.dao;
import app.model.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface Busdetailsrepo extends JpaRepository<Busdetails, Integer> {
	
	@Query("from Busdetails where source=:abc and destination=:def")
	public List<Busdetails> search(@Param("abc") String s,@Param("def") String d);
	
//	 @Query("Select count(buscode) from Bookings where buscode= :abc")
//		int getAvailableSeats(@Param("abc")int buscode);
//	 
	
	
}
