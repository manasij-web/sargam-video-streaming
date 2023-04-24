package com.finalproject.sargam.serviceInterface;

import java.util.List;

import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.exception.ResourceNotFoundException;

public interface UserServiceInterface {

	public User saveUser(User user);
	

	public List<User> getAllUser();
	
	public User findByuserId(Long userId);
	

	public User loginUser(User user) throws ResourceNotFoundException; 
	
	
	public User getUserByEmail(User user) throws ResourceNotFoundException;
	


	public User updateUser(User user,long userId) throws ResourceNotFoundException;


	public void deleteCustomer(long customerId) throws ResourceNotFoundException;

}
