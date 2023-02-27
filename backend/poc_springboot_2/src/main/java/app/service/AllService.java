package app.service;
import java.util.List;

import app.model.Individual;
import app.model.IndividualStatus;
import app.model.Item;
import app.model.ItemStatus;


public interface AllService {
	
	ItemStatus addItem(Item item);
	
	ItemStatus getItembyId(int itemNo);
	
	ItemStatus updateItem(Item item);
	
	ItemStatus removeItem(int itemno);
	
	List<Item> getAllItem();

	List<Individual> getAllIndividuals();

	IndividualStatus addIndividual(Individual user);
	
	IndividualStatus getIndividualbyId(int itemNo);
	
	//IndividualStatus updateItem(Individual item);
	
	//IndividualStatus removeItem(int itemno);
		
	List<Individual> getAllAdmin();
	
	

}
