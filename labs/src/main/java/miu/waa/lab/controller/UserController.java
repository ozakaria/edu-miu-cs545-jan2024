package miu.waa.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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
}
