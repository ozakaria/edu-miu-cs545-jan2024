package miu.waa.lab.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import miu.waa.lab.dto.UserDto;
import miu.waa.lab.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	@Query("select u from User u where size(u.posts) > 1")
	public List<UserDto> getAllUsersHavingMoreThanOnePost();
	
	@Query("select u from User u where size(u.posts) > :num ")
	public List<UserDto> getAllUsersHavingMoreThanNPost(@Param("num") int num);
}
