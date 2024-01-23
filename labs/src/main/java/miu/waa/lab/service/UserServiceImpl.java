package miu.waa.lab.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import miu.waa.lab.dto.PostDto;
import miu.waa.lab.dto.UserDto;
import miu.waa.lab.dto.UserPostsDto;
import miu.waa.lab.entity.Post;
import miu.waa.lab.entity.User;
import miu.waa.lab.helper.ListMapper;
import miu.waa.lab.repo.UserRepo;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepo userRepo;
	
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ListMapper listMapper;
    
    
	@Override
	public List<UserDto> getAll() {
		return (List<UserDto>) listMapper.mapList(userRepo.findAll(),new UserDto());
	}

	@Override
	public UserDto getById(int id) {
		return  modelMapper.map(userRepo.findById(id), UserDto.class);

	}

	@Override
	public void save(UserDto user) {
		userRepo.save(modelMapper.map(user, User.class));
		
	}

	@Override
	public UserPostsDto getUserPosts(int id) {
		return modelMapper.map(userRepo.findById(id), UserPostsDto.class);
	}

}
