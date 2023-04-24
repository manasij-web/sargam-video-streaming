package com.finalproject.sargam.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="videos_table")
@SequenceGenerator(name = "generator2", sequenceName = "gen2", initialValue = 5000)
public class Videos {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator2")
	@Column(name="video_id")
	private long videoId;
	
	@NotEmpty(message = "Video name is required.")
    @Column(name = "videoname", nullable = false, length = 20)
	private String videoName;

	@Column(name="video_link")
	@NotEmpty
	@Lob
	@JsonIgnore
	private byte[] video;
//	


	public byte[] getVideo() {
		return video;
	}


	@NotEmpty(message = "Video description is required.")
	@Column(name = "description", nullable = false)
	private String description;	
	
//	@Column(name = "cart_id")
//	private long cartId;
	
	private Category category;
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	

	public Videos() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getVideoId() {
		return videoId;
	}

	public void setVideoId(long videoId) {
		this.videoId = videoId;
	}

	
	public String getVideoName() {
		return videoName;
	}

	public void setVideoName(String videoName) {
		this.videoName = videoName;
	}


	

	public Videos( @NotEmpty(message = "Video name is required.") String videoname, @NotEmpty byte[] video,
			@NotEmpty(message = "Video description is required.") String description) {
		super();
		this.videoName = videoname;
		this.video = video;
		this.description = description;
	}

	
	public String getDescription() {
		return description;
	}

	public void setVideo(byte[] video) {
		this.video = video;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	@Override
	public String toString() {
		return "Video [videoId=" + videoId + ", videoname=" + videoName + ", description=" + description+
				 ", video link=" + video+ "]";
	}

}