package com.finalproject.sargam.service;
import java.io.IOException;


import com.finalproject.sargam.exception.ResourceNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.finalproject.sargam.exception.FileStorageException;
import com.finalproject.sargam.entity.Category;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.repository.VideosRepository;
import com.finalproject.sargam.serviceInterface.VideosServiceInterface;

@Service
public class VideosService implements VideosServiceInterface{

	@Autowired
	private VideosRepository videosRepository;
	
	@Override
	public Videos findByVideoId(Long videoId) {
		// TODO Auto-generated method stub
		return videosRepository.findByVideoId(videoId);
	}

	@Override
	public List<Videos> findByCategory(Category c) {
		// TODO Auto-generated method stub
		return videosRepository.findByCategory(c);
	}

	@Override
	public List<Videos> findByName(String videoname) {
		// TODO Auto-generated method stub
		return videosRepository.findByVideoName(videoname);
	}

	@Override
	public List<Videos> getAllVideos() {
		
		return videosRepository.findAll();
	}

	@Override
	public Videos storeFile(MultipartFile file, Category c) {
		 String fileName = StringUtils.cleanPath(file.getOriginalFilename());

	        try {
	            // Check if the file's name contains invalid characters
	            if(fileName.contains("..")) {
	                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
	            }

	            Videos videos = new Videos(fileName,file.getBytes(), file.getContentType());
	            	videos.setCategory(c);
	            return videosRepository.save(videos);
	        } catch (IOException ex) {
	            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
	        }
	}
	
	@Override
	public Videos updateVideos(Videos videos,long videosId) throws ResourceNotFoundException {
		
	Videos existingVideos = videosRepository.findById(videosId).orElseThrow(()->new ResourceNotFoundException("videos","videosId",videosId));
	existingVideos.setVideoName(videos.getVideoName());
		//existingProduct.setPrice(videos.getPrice());
	existingVideos.setCategory(videos.getCategory());
	existingVideos.setVideo(videos.getVideo());
	existingVideos.setDescription(videos.getDescription());

		//existingProduct.setCartId(product.getCartId());

		videosRepository.save(existingVideos);
		
		return existingVideos;
		
	}

	@Override
	public void deleteVideos(long videosId) throws ResourceNotFoundException {
		videosRepository.findById(videosId).orElseThrow(()->new ResourceNotFoundException("videos","Id",videosId));
		videosRepository.deleteById(videosId);	
	

	}




	

}