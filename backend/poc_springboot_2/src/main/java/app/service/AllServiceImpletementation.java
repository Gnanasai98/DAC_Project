package app.service;

import app.model.*;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import app.dao.IndividualRepository;
import app.dao.ItemRepository;
import app.model.*;

@Service
public class AllServiceImpletementation implements AllService{

	@Autowired
	private ItemRepository itemRepo;
	
	@Autowired
	private IndividualRepository individualRepo;
	
	@Override
	public ItemStatus addItem(Item item) {
		ItemStatus itemStatus = new ItemStatus(0, "emp not added", item);
		if (!itemRepo.existsById(item.getItemID())) 
		{
			itemRepo.save(item);
			itemStatus.setStatusCode(1);
			itemStatus.setStatusMessage("added successfully");
		}
		
		return itemStatus;	
	}

	@Override
	public ItemStatus getItembyId(int itemNo) {
		ItemStatus itemStatus = new ItemStatus(0, "emp not added",null);
		if(itemRepo.existsById(itemNo)) {
			itemStatus.setStatusCode(1);
			itemStatus.setStatusMessage("Item Found");
		}
		return itemStatus;
	}

	@Override
	public ItemStatus updateItem(Item item) {
		ItemStatus itemStatus = new ItemStatus(0, "emp not added",null);
		if(itemRepo.existsById(item.getItemID()))
		{
			itemRepo.save(item);
			itemStatus.setStatusCode(1);
			itemStatus.setStatusMessage("item updated");
			
		}
		return itemStatus;
	}

	@Override
	public ItemStatus removeItem(int itemno) {
		return null;
	}



	@Override
	public List<Item> getAllItem() {
		return itemRepo.findAll();
	}

	@Override
	public List<Individual> getAllIndividuals() {
		return individualRepo.findAll();
	}

	@Override
	public IndividualStatus addIndividual(Individual user) {
		IndividualStatus individualStatus = new IndividualStatus(0, "emp not added", user);
		if (!individualRepo.existsById(user.getIndividualID())) 
		{
			individualRepo.save(user);
			individualStatus.setStatusCode(1);
			individualStatus.setStatusMessage("added successfully");
		}
		
		return individualStatus;		
	}

	@Override
	public IndividualStatus getIndividualbyId(int individualID) {
		
		return null;
	}
	
	@Override
	public List<Individual> getAllAdmin(int division) {
		// TODO Auto-generated method stub
		return individualRepo.findByDepartmentId(division);
		//return null;

	}

	
	
}
