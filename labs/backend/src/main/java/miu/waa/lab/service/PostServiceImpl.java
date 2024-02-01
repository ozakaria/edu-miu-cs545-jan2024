package miu.waa.lab.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import miu.waa.lab.dto.AddCommentDto;
import miu.waa.lab.dto.CommentDto;
import miu.waa.lab.dto.PostDto;
import miu.waa.lab.entity.Comment;
import miu.waa.lab.entity.Post;
import miu.waa.lab.helper.ListMapper;
import miu.waa.lab.repo.CommentRepo;
import miu.waa.lab.repo.PostRepo;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepo postRepo;
    
    private final CommentRepo commentRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ListMapper listMapper;
    
	@Override
	public List<PostDto> findAll() {
		 return (List<PostDto>) listMapper.mapList(postRepo.findAll(),new PostDto());
	}

	@Override
	public PostDto getById(int id) {

		return modelMapper.map(postRepo.findById(id).get(), PostDto.class);
	}

	@Override
	public void save(PostDto p) {
		postRepo.save(modelMapper.map(p, Post.class));
	}

	@Override
	public void delete(int id) {
		var post = postRepo.findById(id);
		postRepo.delete(post.get());
	}

	@Override
	public void saveComment(AddCommentDto comment) {
		var post = postRepo.findById(comment.getPost_id().intValue());
		post.get().getComments().add(modelMapper.map(comment, Comment.class));
		postRepo.save(post.get());
	}

	@Override
	public void deleteComment(int cId) {
		commentRepo.delete(commentRepo.getById(cId));
	}

	@Override
	public List<PostDto> getPostsByTitle(String title) {
		return (List<PostDto>) listMapper.mapList(postRepo.getPostsByTitle(title), new PostDto());
	}

}
