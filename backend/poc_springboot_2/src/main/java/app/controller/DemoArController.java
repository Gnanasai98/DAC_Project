package app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import app.model.Individual;
import app.model.IndividualStatus;
import app.model.ItemStatus;
import app.service.AllService;
@CrossOrigin(origins="*")

@RestController
public class DemoArController {

	@Autowired
	private AllService service;
	
	@GetMapping("/getitemdetails/{itemId}")
	public ResponseEntity<ItemStatus> getBookDetails(@PathVariable int itemId) {
		
		System.out.println("getbook controller function got input as " + itemId);
		ResponseEntity<ItemStatus> re=null;
		ItemStatus x = service.getItembyId(itemId);
		if(x.getStatusCode() == 0)
				re =new ResponseEntity<ItemStatus>(x,HttpStatus.NOT_FOUND);
		else
			re =new ResponseEntity<ItemStatus>(x,HttpStatus.OK);
		return re;
	}
	
	@GetMapping("/getallindividual")
	public List<Individual> getAllIndividuals(){
		return service.getAllIndividuals();
	}
	
	@PostMapping("/addindividual")
	public IndividualStatus addIndividual(@RequestBody Individual individual)
	{
		System.out.println("Add vehicle controller is" + individual);
		IndividualStatus individualStatus = service.addIndividual(individual);
		return individualStatus;
	}
	@GetMapping("/getalladmin")
	public List<Individual> getAllAdmin(){
		
		return service.getAllAdmin();
		
	}
}
