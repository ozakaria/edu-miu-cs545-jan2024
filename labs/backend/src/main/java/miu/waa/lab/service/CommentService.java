package miu.waa.lab.service;

import java.util.List;

import miu.waa.lab.dto.CommentDto;

public interface CommentService {

    public List<CommentDto> findAll();

    public CommentDto getById(int id);

    public void save(CommentDto p);

    public void delete(int id);
}
