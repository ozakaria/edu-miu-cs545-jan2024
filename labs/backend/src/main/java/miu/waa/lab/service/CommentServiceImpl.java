package miu.waa.lab.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import miu.waa.lab.dto.CommentDto;
import miu.waa.lab.dto.PostDto;
import miu.waa.lab.entity.Comment;
import miu.waa.lab.helper.ListMapper;
import miu.waa.lab.repo.CommentRepo;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    
    private final CommentRepo commentRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ListMapper listMapper;
    
	@Override
	public List<CommentDto> findAll() {
		return (List<CommentDto>) listMapper.mapList(commentRepo.findAll(),new PostDto());
	}

	@Override
	public CommentDto getById(int id) {
		return modelMapper.map(commentRepo.findById(id).get(), CommentDto.class);
	}

	@Override
	public void save(CommentDto c) {
		commentRepo.save(modelMapper.map(c, Comment.class));
	}

	@Override
	public void delete(int id) {
		var comment = commentRepo.findById(id);
		commentRepo.delete(comment.get());
	}

}
