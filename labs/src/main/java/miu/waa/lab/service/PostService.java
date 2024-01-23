package miu.waa.lab.service;

import java.util.List;

import miu.waa.lab.dto.PostDto;

public interface PostService {

    public List<PostDto> findAll();

    public PostDto getById(int id);

    public void save(PostDto p);

    public void delete(int id);

    public void update(int id, PostDto p);
}
