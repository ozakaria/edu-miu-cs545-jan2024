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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import miu.waa.lab.dto.CommentDto;
import miu.waa.lab.service.CommentService;

@RestController
@RequestMapping("/comments")
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
