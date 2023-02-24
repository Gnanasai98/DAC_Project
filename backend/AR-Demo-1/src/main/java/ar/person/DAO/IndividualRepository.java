package ar.person.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.person.model.Individual;

@Repository
public interface IndividualRepository extends JpaRepository<Individual, Integer>
{

}
