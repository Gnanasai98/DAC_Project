package app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TestPerson implements CommandLineRunner
{
	public static void main(String[] args) {
		SpringApplication.run(TestPerson.class, args);
		System.out.println(1);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		//SpringApplication.run(TestPerson.class, args);

	}
//	@Autowired
//	private DemoArController controller;

}
