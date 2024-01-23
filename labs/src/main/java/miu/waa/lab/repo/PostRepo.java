package miu.waa.lab.repo;

import java.util.List;

import miu.waa.lab.entity.Post;


public interface PostRepo {

    public List<Post> findAll();

    public Post getById(int id);

    public void save(Post p);

    public void delete(int id);

    public void update(int id, Post p);
}
