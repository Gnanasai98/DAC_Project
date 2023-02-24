package ar.person.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ar.person.model.ItemStatus;
import ar.person.service.AllService;

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
	
}
