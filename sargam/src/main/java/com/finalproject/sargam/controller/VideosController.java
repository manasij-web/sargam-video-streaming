package com.finalproject.sargam.controller;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.finalproject.sargam.exception.ResourceNotFoundException;
import com.finalproject.sargam.exception.UploadFileResponse;
import com.finalproject.sargam.entity.Category;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.service.VideosService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/videos")
public class VideosController {
	
	 private static final Logger logger = LoggerFactory.getLogger(VideosController.class);

	@Autowired
	private VideosService videosService;
	
	@GetMapping("/view")
	public List<Videos> getAllVideos() {
		return videosService.getAllVideos();
	}
	
//	@PostMapping("/add videos")
//	public ResponseEntity<Videos> addVideo(@Valid @RequestBody Videos videos) {
//
//		return new ResponseEntity<Videos>(videosService.addVideo(videos), HttpStatus.CREATED);
//	}
	
	 @PostMapping("/uploadFile")
	    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file,@RequestParam("category") int category) {
		 	Category c = Category.valueOf(category);
	        Videos videos = videosService.storeFile(file,c);
	        
	        	//videos.setCategory(c);
	        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
	        		.path("/api/videos")
	        		.path("/files/")
	        		.path(String.valueOf(videos.getVideoId()))
	                // .path(videos.getVideoName())
	                .toUriString();

	        return new UploadFileResponse(videos.getVideoName(), fileDownloadUri,
	                file.getContentType(), file.getSize());
	    }
	
	
	@GetMapping("/byCategory/{categoryId}")
	public List<Videos> getAllProductsByCategory(@PathVariable("categoryId") int categoryId) {
		Category c = Category.valueOf(categoryId);
		return videosService.findByCategory(c);
	}
	
	@GetMapping("/byName/{videoname}")
	public List<Videos> getByName(@PathVariable("videoname") Videos videoname) {
		Videos v=new Videos();
		return videosService.findByName(v.getVideoName());
	}
	
	@GetMapping("/files/{id}")
	  public ResponseEntity<byte[]> getFile(@PathVariable Long id) {
		 Videos v = videosService.findByVideoId(id);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + v.getVideoName() + "\"")
	        .body(v.getVideo());
	  }
	  
	// to update product
			@PutMapping("{videosId}")
			public ResponseEntity<Videos> updateProduct(@Valid @PathVariable("videosId") long videosId, @RequestBody Videos videos) throws ResourceNotFoundException {
				return new ResponseEntity<Videos>(videosService.updateVideos(videos, videosId), HttpStatus.OK);
			}

			@DeleteMapping("{videosId}")
			public ResponseEntity<Boolean> deleteProduct(@PathVariable("videosId") long videosId) throws ResourceNotFoundException {
				videosService.deleteVideos(videosId);
				boolean flag = true;
				return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
			}
}
