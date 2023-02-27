package ar.person.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.person.DAO.IndividualRepository;
import ar.person.DAO.ItemRepository;
import ar.person.model.Individual;
import ar.person.model.IndividualStatus;
import ar.person.model.Item;
import ar.person.model.ItemStatus;

@Service
public class AllServiceImpletementation implements AllService{

	@Autowired
	private ItemRepository itemRepo;
	
	@Autowired
	private IndividualRepository individualRepo;
	
	@Override
	public ItemStatus addItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemStatus getItembyId(int itemNo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemStatus updateItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemStatus removeItem(int itemno) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndividualStatus addUser(Individual user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndividualStatus getUserbyId(int itemNo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndividualStatus getAdminbyId(int itemNo) {
		// TODO Auto-generated method stub
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
}
