package app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String itemName;
	
	String itemImageData;
	
	String itemdescription;
	
	String itemLocation;
	
	public Item(int itemID, String itemName, String itemImageData, String itemdescription, String itemLocation) {
		super();
		this.id = itemID;
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
		return id;
	}
	public void setItemID(int itemID) {
		this.id = itemID;
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
