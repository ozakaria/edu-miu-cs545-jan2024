package miu.waa.lab.service;

import java.util.List;

import miu.waa.lab.dto.UserDto;
import miu.waa.lab.dto.UserPostsDto;

public interface UserService {

	public List<UserDto> getAll();

	public UserDto getById(int id);

	public void save(UserDto user);

	public UserPostsDto getUserPosts(int id);
}
