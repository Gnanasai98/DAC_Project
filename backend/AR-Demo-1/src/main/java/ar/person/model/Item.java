package ar.person.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {
	
	@Id
	int itemID;
	
	String itemName;
	
	String itemImageData;
	
	String itemdescription;
	
	String itemLocation;
	
	public Item(int itemID, String itemName, String itemImageData, String itemdescription, String itemLocation) {
		super();
		this.itemID = itemID;
		this.itemName = itemName;
		this.itemImageData = itemImageData;
		this.itemdescription = itemdescription;
		this.itemLocation = itemLocation;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getItemID() {
		return itemID;
	}
	public void setItemID(int itemID) {
		this.itemID = itemID;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getItemImageData() {
		return itemImageData;
	}
	public void setItemImageData(String itemImageData) {
		this.itemImageData = itemImageData;
	}
	public String getItemdescription() {
		return itemdescription;
	}
	public void setItemdescription(String itemdescription) {
		this.itemdescription = itemdescription;
	}
	public String getItemLocation() {
		return itemLocation;
	}
	public void setItemLocation(String itemLocation) {
		this.itemLocation = itemLocation;
	}

}
