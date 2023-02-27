package app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Individual {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String individualName;
	
	String email;
	
	int division;
	
	String password;
	
	public int getIndividualID() {
		return id;
	}
	public void setIndividualID(int individualID) {
		this.id = individualID;
	}
	public String getIndividualName() {
		return individualName;
	}
	public void setIndividualName(String individualName) {
		this.individualName = individualName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getDivision() {
		return division;
	}
	public void setDivision(int division) {
		this.division = division;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Individual() {
		super();
	}
	public Individual(int individualID, String individualName, String email, int division, String password) {
		super();
		this.id = individualID;
		this.individualName = individualName;
		this.email = email;
		this.division = division;
		this.password = password;
	}
	
}
