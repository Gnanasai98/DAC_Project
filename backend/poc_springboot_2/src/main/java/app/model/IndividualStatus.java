package app.model;

public class IndividualStatus {
	private int statusCode;
	private String statusMessage;
	private Individual individual;
	public IndividualStatus(int statusCode, String statusMessage, Individual individual) {
		super();
		this.statusCode = statusCode;
		this.statusMessage = statusMessage;
		this.individual = individual;
	}
	public IndividualStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public Individual getIndividual() {
		return individual;
	}
	public void setIndividual(Individual individual) {
		this.individual = individual;
	}
}
