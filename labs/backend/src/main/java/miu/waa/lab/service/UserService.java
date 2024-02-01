package miu.waa.lab.service;

import java.util.List;

import miu.waa.lab.dto.AddPostDto;
import miu.waa.lab.dto.UserDto;
import miu.waa.lab.dto.UserPostsDto;
import miu.waa.lab.entity.User;

public interface UserService {

	public List<UserDto> getAll();

	public UserDto getById(int id);

	public void save(UserDto user);

	public UserPostsDto getUserPosts(int id);
	
	public List<UserDto> getAllUsersHavingMoreThanOnePost();
	
	public List<UserDto> getAllUsersHavingMoreThanNPost(int num);
	
	public void savePost(AddPostDto post);
	
	public void deletePost(int postId);
}
