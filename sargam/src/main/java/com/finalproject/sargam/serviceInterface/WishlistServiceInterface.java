package com.finalproject.sargam.serviceInterface;

import java.util.List;

import javax.validation.Valid;


import com.finalproject.sargam.entity.Wishlist;
import com.finalproject.sargam.exception.ResourceNotFoundException;

public interface WishlistServiceInterface {

	public  Wishlist getWishlistById(long wishlistId);
	
	public List<Wishlist> getAllWishlist();
	
	public Wishlist addWishlist(@Valid Wishlist wishlist, long videoId, long userId) throws ResourceNotFoundException;
	
public Wishlist updateWishlist(Wishlist wishlist, long wishlistId) throws ResourceNotFoundException;

public void deleteWishlist(long wishlistId) throws ResourceNotFoundException;

	
	
}
