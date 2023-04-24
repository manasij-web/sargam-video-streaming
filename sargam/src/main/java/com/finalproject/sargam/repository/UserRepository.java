package com.finalproject.sargam.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.finalproject.sargam.entity.User;

public interface UserRepository extends JpaRepository<User, Long>
{

	Optional<User> findByUserEmailIdAndUserPassword(String emailId,String password);
	Optional<User> findByUserEmailId(String emailId);

}
