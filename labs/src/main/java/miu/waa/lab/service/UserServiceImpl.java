package miu.waa.lab.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import miu.waa.lab.dto.AddPostDto;
import miu.waa.lab.dto.PostDto;
import miu.waa.lab.dto.UserDto;
import miu.waa.lab.dto.UserPostsDto;
import miu.waa.lab.entity.Comment;
import miu.waa.lab.entity.Post;
import miu.waa.lab.entity.User;
import miu.waa.lab.helper.ListMapper;
import miu.waa.lab.repo.PostRepo;
import miu.waa.lab.repo.UserRepo;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepo userRepo;

	private final PostRepo postRepo;

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	ListMapper listMapper;

	@Override
	public List<UserDto> getAll() {
		return (List<UserDto>) listMapper.mapList(userRepo.findAll(), new UserDto());
	}

	@Override
	public UserDto getById(int id) {
		return modelMapper.map(userRepo.findById(id), UserDto.class);

	}

	@Override
	public void save(UserDto user) {
		userRepo.save(modelMapper.map(user, User.class));

	}

	@Override
	public UserPostsDto getUserPosts(int id) {
		return modelMapper.map(userRepo.findById(id), UserPostsDto.class);
	}

	@Override
	public List<UserDto> getAllUsersHavingMoreThanOnePost() {
		return (List<UserDto>) listMapper.mapList(userRepo.getAllUsersHavingMoreThanOnePost(), new UserDto());
	}

	@Override
	public List<UserDto> getAllUsersHavingMoreThanNPost(int num) {
		return (List<UserDto>) listMapper.mapList(userRepo.getAllUsersHavingMoreThanNPost(num), new UserDto());
	}

	@Override
	public void savePost(AddPostDto post) {
		var user = userRepo.findById(post.getUser_id().intValue());
		user.get().getPosts().add(modelMapper.map(post, Post.class));
		userRepo.save(user.get());
	}

	@Override
	public void deletePost(int postId) {
		postRepo.delete(postRepo.getById(postId));
	}

}
