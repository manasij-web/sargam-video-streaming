package com.finalproject.sargam.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.sargam.entity.Category;
import com.finalproject.sargam.entity.User;
import com.finalproject.sargam.entity.Videos;

@Repository
public interface VideosRepository extends JpaRepository<Videos,Long>
{

	public List<Videos> findByCategory(Category c);
	

	public List<Videos> findByVideoName(String videoname);
	
	public Videos findByVideoId(Long id);
}