package app.model;

public class ItemStatus {
	private int statusCode;
	private String statusMessage;
	private Item emp;
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
	public Item getEmp() {
		return emp;
	}
	public void setEmp(Item emp) {
		this.emp = emp;
	}
	public ItemStatus(int statusCode, String statusMessage, Item emp) {
		super();
		this.statusCode = statusCode;
		this.statusMessage = statusMessage;
		this.emp = emp;
	}
	public ItemStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
}
