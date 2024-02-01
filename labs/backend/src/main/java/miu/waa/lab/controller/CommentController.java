package miu.waa.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import miu.waa.lab.dto.CommentDto;
import miu.waa.lab.service.CommentService;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping
	public List<CommentDto> getAll() {
		return commentService.findAll();
	}

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/{id}")
	public CommentDto getOne(@PathVariable int id) {
		return commentService.getById(id);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public void addComment(@RequestBody CommentDto post) {
		commentService.save(post);
	}

	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		commentService.delete(id);
	}

}
