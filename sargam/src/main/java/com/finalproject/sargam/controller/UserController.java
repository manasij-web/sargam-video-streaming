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
import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.exception.ResourceNotFoundException;
import com.finalproject.sargam.service.UserService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController
{

	@Autowired
	private UserService userService;

//		Register
	@PostMapping("/register")
	public ResponseEntity<User> saveAdmin(@Valid @RequestBody User user)
	{
		System.out.println("user register " + user);
		return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<User> findByUserId(@PathVariable("id") Long userId)
	{
		return new ResponseEntity<User>(userService.findByuserId(userId), HttpStatus.OK);

	}

	@GetMapping("/user")
	public List<User> getalluser()
	{
		return userService.getAllUser();
	}
	
	//Login
		@PostMapping("/login")
		public ResponseEntity<User> loginCustomer(@RequestBody User user) throws ResourceNotFoundException {

			return new ResponseEntity<User>(userService.loginUser(user), HttpStatus.OK);

		}

	//Update User	
		@PutMapping("user/{id}")
		public ResponseEntity<User> updateCustomer(@PathVariable("id") long userId, @RequestBody User user) throws ResourceNotFoundException {
			return new ResponseEntity<User>(userService.updateUser(user, userId), HttpStatus.OK);
		}

		// get customer by email
		@PostMapping("/forgotpassword")
		public User getUserByEmail(@RequestBody User user) throws ResourceNotFoundException {
			return userService.getUserByEmail(user);
		}

	//Delete Customer	
		@DeleteMapping("user/{id}")
		public ResponseEntity<Boolean> deleteUser(@PathVariable("id") long userId) throws ResourceNotFoundException {
			userService.deleteCustomer(userId);
			boolean flag = true;
			return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
		}
}
