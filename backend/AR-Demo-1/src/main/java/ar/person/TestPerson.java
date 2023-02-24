package ar.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ar.person.controller.DemoArController;
import ar.person.service.AllService;

@SpringBootApplication
public class TestPerson implements CommandLineRunner
{

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		SpringApplication.run(TestPerson.class, args);

	}
	@Autowired
	private DemoArController controller;

}
