package miu.waa.lab.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import miu.waa.lab.entity.Post;


public interface PostRepo extends JpaRepository<Post,Integer> {

	@Query("select p from Post p where p.title like :title ")
	public List<Post> getPostsByTitle(@Param("title") String title);
}
