package ar.person.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Individual {
	@Id
	int individualID;
	
	String individualName;
	
	String email;
	
	int division;
	
	String password;
	
	public int getIndividualID() {
		return individualID;
	}
	public void setIndividualID(int individualID) {
		this.individualID = individualID;
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
		this.individualID = individualID;
		this.individualName = individualName;
		this.email = email;
		this.division = division;
		this.password = password;
	}
	
}
