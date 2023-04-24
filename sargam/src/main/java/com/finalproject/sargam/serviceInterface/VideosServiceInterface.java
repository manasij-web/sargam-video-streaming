package com.finalproject.sargam.serviceInterface;


import java.util.List;


import org.springframework.web.multipart.MultipartFile;

import com.finalproject.sargam.entity.Category;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.exception.ResourceNotFoundException;

public interface VideosServiceInterface {

	public Videos findByVideoId(Long videoId);

	public List<Videos> findByCategory(Category c);

	public List<Videos> findByName(String videoname);

	public List<Videos> getAllVideos();

	public Videos storeFile(MultipartFile file, Category c);
public Videos updateVideos(Videos videos,long videosId) throws ResourceNotFoundException;

	public void deleteVideos(long videosId) throws ResourceNotFoundException;



}
