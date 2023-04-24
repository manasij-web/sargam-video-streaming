package com.finalproject.sargam.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "	Wishlist_table")
@SequenceGenerator(name = "generator3", sequenceName = "gen3", initialValue = 1500)
public class Wishlist {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator3")
	@Column(name = "wishlist_id")
	private long wishlistId;

	@Column(name = "desp")
	private String description;
	

	



	@ManyToOne( cascade=CascadeType.MERGE)
	@JoinColumn(name="video_id")
	//@JsonIgnore
    private Videos videos;
	
	@ManyToOne( cascade=CascadeType.MERGE)
	@JoinColumn(name="user_id")
    private User user;
	
	
	public Wishlist() {

	}



	public long getWishlistId() {
		return wishlistId;
	}



	public void setWishlistId(long wishlistId) {
		this.wishlistId = wishlistId;
	}

	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}

	public Videos getVideos() {
		return videos;
	}



	public void setVideos(Videos videos) {
		this.videos = videos;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "Wishlist [wishlistId=" + wishlistId + ", videos=" + videos + ", user=" + user + ",description="+description+"]";
	}





	

}
