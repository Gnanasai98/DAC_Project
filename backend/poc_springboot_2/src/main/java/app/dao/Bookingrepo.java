package app.dao;
import app.model.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface Bookingrepo extends JpaRepository<Bookings, Integer> {
	@Query("from Bookings where username=:abc")
	public List<Bookings> search(@Param("abc") String s);
	
	@Query("from Bookings where id=:abc")
	public Bookings getBookingByID(@Param("abc") Long id);
	
	 @Modifying
	 @Transactional
	@Query("delete from Bookings where id = :abc")
	void deleteBookingByID(@Param("abc") Long id);
	 
//	 @Query("select id,buscode,date,destination,noofpassengers,source,username,30-(select count(buscode) from Bookings where buscode=:def)as availableseats from Bookings;")
//	public List<Bookings> getAllBusDetails(@Param("def") int d);

	// @Query("SELECT id, buscode, date, destination, noofpassengers, source, username, (30 - (SELECT COUNT(buscode) FROM Bookings WHERE buscode=:def)) AS availableseats FROM Bookings")
//	 public List<Bookings> getAllBusDetails(@Param("def") int d);
//	
//	@Modifying
//	@Transactional
//    @Query("UPDATE Bookings b SET b.availableSeats = " +
//           "b.noofpassengers-(SELECT COUNT(*) FROM Bookings WHERE buscode = :buscode) " +
//           "WHERE b.buscode = :buscode")
//    int updateAvailableSeatsByBuscode(int buscode);

}
