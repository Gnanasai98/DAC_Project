package app.dao;
import app.model.Individual;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface IndividualRepository extends JpaRepository<Individual, Integer>
{
	 	@Query(value = "FROM Individual WHERE division = :x")
	    List<Individual> findByDepartmentId(@Param("x") int x);
}
