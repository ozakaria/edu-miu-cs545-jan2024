package miu.waa.lab.repo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import miu.waa.lab.entity.Post;

@Repository
public class PostRepoImpl implements PostRepo {

	private static List<Post> posts;
	private static int postId = 300;
	static {
		posts = new ArrayList<>();
		Post p1 = new Post(111, "Phones", "Trending phone for today is the iPhone", "John");
		Post p2 = new Post(112, "Health", "Doing daily exercises is good for the body", "Jasmin");
		posts.add(p1);
		posts.add(p2);
	}

	@Override
	public List<Post> findAll() {
		// TODO Auto-generated method stub
		return posts;
	}

	@Override
	public Post getById(int id) {
		return posts.stream().filter(l -> l.getId() == id).findFirst().orElse(null);
	}

	@Override
	public void save(Post p) {
		p.setId(postId); // We are auto generating the id for DEMO purposes, (Normally, do not change
							// your parameters)
		postId++;
		posts.add(p);
	}

	@Override
	public void delete(int id) {
		var post = posts.stream().filter(l -> l.getId() == id).findFirst().get();
		posts.remove(post);
	}

	@Override
	public void update(int id, Post p) {
		Post toUpdate = getById(id);
		toUpdate.setTitle(p.getTitle());
		toUpdate.setContent(p.getContent());
		toUpdate.setAuthor(p.getAuthor());
	}

}
