package ar.person.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.person.model.Individual;
import ar.person.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item,Integer>
{

}
