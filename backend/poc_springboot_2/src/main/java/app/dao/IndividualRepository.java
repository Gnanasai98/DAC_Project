package app.dao;
import app.model.Individual;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mysql.cj.x.protobuf.MysqlxCrud.Collection;


@Repository
public interface IndividualRepository extends JpaRepository<Individual, Integer>
{
//	 	@Query(" SELECT individual_Name, email, password FROM individual WHERE division = 2")
//	    List<Individual> findByDepartmentId();
}
