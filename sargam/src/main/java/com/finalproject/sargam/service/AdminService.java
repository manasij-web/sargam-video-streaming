package com.finalproject.sargam.service;

import java.util.List;
//import java.util.NoSuchElementException;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finalproject.sargam.exception.ResourceNotFoundException;
import com.finalproject.sargam.entity.Admin;
import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.entity.Videos;
import com.finalproject.sargam.repository.AdminRepository;
import com.finalproject.sargam.repository.UserRepository;
import com.finalproject.sargam.repository.VideosRepository;
import com.finalproject.sargam.serviceInterface.AdminServiceInterface;

@Service
public class AdminService implements AdminServiceInterface{
	@Autowired
private AdminRepository adminRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private VideosRepository videosRepository;

	public AdminService(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	@Override
	public Admin saveAdmin(Admin admin) {
		System.out.println("admin register service"+admin);

		return adminRepository.save(admin);
	}

	@Override
	public Admin loginAdmin(Admin admin) throws ResourceNotFoundException {
		return this.adminRepository.findByAdminEmailIdAndAdminPassword(admin.adminEmailId,admin.adminPassword).orElseThrow(()->new ResourceNotFoundException("Admin ", "Id",admin.adminEmailId+"and password "+admin.adminPassword ));
	}

	@Override
	public List<Videos> getAllVideos(long adminId) {
		
		// TODO Auto-generated method stub
		return  videosRepository.findAll();
	}
	
	@Override
	public List<User> getAllCustomers(long adminId) {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

			
		

		
}