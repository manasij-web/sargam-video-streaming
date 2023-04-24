package com.finalproject.sargam.controller;

import java.util.List;


import javax.validation.Valid;



import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.sargam.entity.Wishlist;
import com.finalproject.sargam.exception.ResourceNotFoundException;
import com.finalproject.sargam.service.WishlistService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/Wishlist")
public class WishlistController {
	@Autowired
	private WishlistService wishlistService;
	
	@PostMapping("/{userId}/{videoId}")
	public ResponseEntity<Wishlist> addWishlist(@Valid @RequestBody Wishlist wishlist, @PathVariable long videoId,@PathVariable long userId) throws ResourceNotFoundException {
		System.out.println("********");
		return new ResponseEntity<Wishlist>(wishlistService.addWishlist(wishlist, videoId,userId), HttpStatus.CREATED);
	}
	@GetMapping("Wishlist/{id}")
	public ResponseEntity<Wishlist> getWishlistById(@PathVariable("id") long wishlistId) {
		return new ResponseEntity<Wishlist>(wishlistService.getWishlistById(wishlistId), HttpStatus.OK);
	}

	// update cart
		@PutMapping("{wishlistId}")
		public ResponseEntity<Wishlist> updateCart(@Valid @PathVariable("wishlistId") long wishlistId, @RequestBody Wishlist wishlist) throws ResourceNotFoundException {
			return new ResponseEntity<Wishlist>(wishlistService.updateWishlist(wishlist, wishlistId), HttpStatus.OK);
		}

		// delete hotel
		@DeleteMapping("{wishlistId}")
		public ResponseEntity<Boolean> deleteCart(@PathVariable long wishlistId) throws ResourceNotFoundException {
			wishlistService.deleteWishlist(wishlistId);
			boolean flag = true;
			return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
		}
		
		// to get product in cart
		@GetMapping("/list")
		public List<Wishlist> getAllCarts() {
			return wishlistService.getAllWishlist();
		}
		

		
}
