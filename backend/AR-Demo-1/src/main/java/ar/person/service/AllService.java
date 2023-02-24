package ar.person.service;

import java.util.List;

import ar.person.model.Individual;
import ar.person.model.IndividualStatus;
import ar.person.model.Item;
import ar.person.model.ItemStatus;


public interface AllService {
	
	ItemStatus addItem(Item item);
	
	ItemStatus getItembyId(int itemNo);
	
	ItemStatus updateItem(Item item);
	
	ItemStatus removeItem(int itemno);
	
	List<Item> getAllItem();

	IndividualStatus addUser(Individual user);
	
	IndividualStatus getUserbyId(int itemNo);
	
	//IndividualStatus updateItem(Individual item);
	
	//IndividualStatus removeItem(int itemno);
		
	IndividualStatus getAdminbyId(int itemNo);
	
	

}
