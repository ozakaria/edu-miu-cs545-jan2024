package miu.waa.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import miu.waa.lab.dto.AddCommentDto;
import miu.waa.lab.dto.AddPostDto;
import miu.waa.lab.dto.UserDto;
import miu.waa.lab.dto.UserPostsDto;
import miu.waa.lab.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping
	public List<UserDto> getAll() {
		return userService.getAll();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}")
	public UserDto getOne(@PathVariable int id) {
		return userService.getById(id);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public void addUser(@RequestBody UserDto user) {
		userService.save(user);
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}/posts")
	public UserPostsDto getUserPosts(@PathVariable int id) {
		return userService.getUserPosts(id);
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/morethanonepost")
	public List<UserDto> getUserHasMoreThanPost() {
		return userService.getAllUsersHavingMoreThanOnePost();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/morethanoneNpost")
	public List<UserDto> getUserHasMoreThanNPost(@RequestParam("count") int num) {
		return userService.getAllUsersHavingMoreThanNPost(num);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/{id}/post")
	public void addPost(@PathVariable long id, @RequestBody AddPostDto post) {
		post.setUser_id(id);
		userService.savePost(post);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}/post/{postId}")
	public void deleteComment(@PathVariable("id") long id, @PathVariable("postId") int commentId) {
		userService.deletePost(commentId);
	}
}
