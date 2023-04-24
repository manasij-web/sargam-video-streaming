package com.finalproject.sargam.service;

import java.util.List;

import com.finalproject.sargam.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.repository.UserRepository;
import com.finalproject.sargam.serviceInterface.UserServiceInterface;

@Service
public class UserService implements UserServiceInterface{

	@Autowired
	private UserRepository userRepository;
	
	 

	public UserService() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public User saveUser(User user)
	{
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUser()
	{
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public User findByuserId(Long userId)
	{
		// TODO Auto-generated method stub
		return userRepository.getById(userId);
	}

	@Override
	public User loginUser(User user) throws ResourceNotFoundException {
		
		return this.userRepository.findByUserEmailIdAndUserPassword(user.userEmailId,user.userPassword).orElseThrow(()->new ResourceNotFoundException("User ", "Id",user.userEmailId+" and password "+user.userPassword));
	}
	
	@Override
	public User getUserByEmail(User user) throws ResourceNotFoundException
	{
		return this.userRepository.findByUserEmailId(user.userEmailId).orElseThrow(()->new ResourceNotFoundException("User ", "Email",user.userEmailId));
	}

	@Override
	public User updateUser(User user,long userId) throws ResourceNotFoundException {
	
		User existingUser=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));	
		existingUser.setFirstName(user.getFirstName());
		existingUser.setLastName(user.getLastName());
		existingUser.setUserEmailId(user.getUserEmailId());
		existingUser.setUserPassword(user.getUserPassword());
	userRepository.save(existingUser);
	return existingUser;
	}

	@Override
	public void deleteCustomer(long customerId) throws ResourceNotFoundException {
		userRepository.findById(customerId).orElseThrow(()->new ResourceNotFoundException("Customer","Id",customerId));
		userRepository.deleteById(customerId);
		
	}
	

}
