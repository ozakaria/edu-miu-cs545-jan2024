package miu.waa.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import miu.waa.lab.dto.PostDto;
import miu.waa.lab.service.PostService;

@RestController
@RequestMapping("/posts")
public class PostController {

	@Autowired
	private PostService postService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping
	public List<PostDto> getAll() {
		return postService.findAll();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}")
	public PostDto getOne(@PathVariable int id) {
		return postService.getById(id);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public void addPost(@RequestBody PostDto post) {
		postService.save(post);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		postService.delete(id);
	}

	@PutMapping("/{id}")
	public void update(@PathVariable("id") int postId, @RequestBody PostDto p) {
		postService.update(postId, p);
	}

}
