package com.finalproject.sargam.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finalproject.sargam.exception.ResourceNotFoundException;

import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.entity.Wishlist;
import com.finalproject.sargam.repository.WishlistRepository;
import com.finalproject.sargam.serviceInterface.WishlistServiceInterface;

@Service
public class WishlistService implements WishlistServiceInterface {
	@Autowired
	public WishlistRepository wishlistRepository;

	@Autowired
	public VideosService vediosService;

	@Autowired
	public UserService userService;

	public WishlistService(WishlistRepository wishlistRepository) {
		super();
		this.wishlistRepository = wishlistRepository;
	}

	@Override
	public Wishlist getWishlistById(long wishlistId) {
		// TODO Auto-generated method stub
		return wishlistRepository.getById(wishlistId);
	}

	@Override
	public List<Wishlist> getAllWishlist() {
		return wishlistRepository.findAll();
	}

	@Override
	public Wishlist addWishlist(@Valid Wishlist wishlist, long videoId, long userId) throws ResourceNotFoundException {
		Videos videos = vediosService.findByVideoId(videoId);
		User user = (User) userService.findByuserId(userId);
		List<Wishlist> crl = this.getAllWishlist();
		int flag = 0;
		Wishlist existingWishlist = null;
		if (crl.size() > 0) {
			for (int i = 0; i < crl.size(); i++) {
				Wishlist w = this.getWishlistById(crl.get(i).getWishlistId());
				if (w.getUser().getUserId() == userId && w.getVideos().getVideoId() == videoId) {
					flag = 1;
					existingWishlist = w;
				}
			}
		}
		// videos.setDescription(videos.getDescription());//existingCart.getQuantity() +
		// cart.getQuantity()
		if (flag == 1 && existingWishlist != null) {
			existingWishlist.setDescription(existingWishlist.getDescription() + wishlist.getDescription());
			// existingWishlist.setMrpPrice(videos.getMrpPrice());
			existingWishlist.setUser(user);
			System.out.println("111111111111111111111111111111111");
			return this.updateWishlist(existingWishlist, existingWishlist.getWishlistId());
		} else {
			wishlist.setVideos(videos);
			// wishlist.setMrpPrice(videos.getMrpPrice());
			wishlist.setUser(user);
			System.out.println("2222222222222222222222222222222222222222");
			return wishlistRepository.save(wishlist);
		}
	}

	@Override
	public Wishlist updateWishlist(Wishlist wishlist, long wishlistId) throws ResourceNotFoundException {
		Wishlist existingWishlist = wishlistRepository.findById(wishlistId)
				.orElseThrow(() -> new ResourceNotFoundException("Wishlist", "Id", wishlistId));
		existingWishlist.setDescription(wishlist.getDescription());
		// existingCart.setPrice(cart.getPrice());
		// existingWishlist.setMrpPrice(wishlist.getMrpPrice());
		// existingCart.setImage(cart.getImage());
		existingWishlist.setWishlistId(wishlist.getWishlistId());
		existingWishlist.setVideos(wishlist.getVideos());
		// existingCart.setCustomerId(cart.getCustomerId());
		existingWishlist.setUser(wishlist.getUser());
		wishlistRepository.save(existingWishlist);

		return existingWishlist;
	}

	@Override
	public void deleteWishlist(long wishlistId) throws ResourceNotFoundException {
		Wishlist existingWishlist = wishlistRepository.findById(wishlistId)
				.orElseThrow(() -> new ResourceNotFoundException("wishlist", "Id", wishlistId));
		Videos videos = vediosService.findByVideoId(existingWishlist.getVideos().getVideoId());
		// videos.setQuantity(videos.getQuantity() + existingWishlist.getQuantity());
		vediosService.updateVideos(videos, videos.getVideoId());
		wishlistRepository.findById(wishlistId)
				.orElseThrow(() -> new ResourceNotFoundException("Wishlist", "Id", wishlistId));
		wishlistRepository.deleteById(wishlistId);

	}

//	public Optional<Wishlist> getWishlistById1(long wishlistId) {
//		
//		return wishlistRepository.findById(wishlistId);
//	}
}
