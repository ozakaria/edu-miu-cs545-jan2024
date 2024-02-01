package miu.waa.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import miu.waa.lab.dto.AddCommentDto;
import miu.waa.lab.dto.CommentDto;
import miu.waa.lab.dto.PostDto;
import miu.waa.lab.service.PostService;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/filter")
	public List<PostDto> getByTitle(@RequestParam("title") String title) {
		return postService.getPostsByTitle(title);
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

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/{id}/comment")
	public void addComment(@PathVariable long id, @RequestBody AddCommentDto comment) {
		comment.setPost_id(id);
		postService.saveComment(comment);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}/comment/{commentId}")
	public void deleteComment(@PathVariable long id, @PathVariable int commentId) {
		postService.deleteComment(commentId);
	}

}
