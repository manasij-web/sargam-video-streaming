package com.finalproject.sargam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.entity.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Long>{
	void deleteWishlistByUser(User u);
	
}
