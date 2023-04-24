package com.finalproject.sargam.serviceInterface;

import java.util.List;

import com.finalproject.sargam.entity.Admin;
import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.exception.ResourceNotFoundException;

public interface AdminServiceInterface {

	public Admin saveAdmin(Admin admin);

	public Admin loginAdmin(Admin admin) throws ResourceNotFoundException; 

	public List<Videos> getAllVideos(long adminId);
	
	public List<User> getAllCustomers(long adminId); 

			
		
}
