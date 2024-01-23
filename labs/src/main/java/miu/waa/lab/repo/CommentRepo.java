package miu.waa.lab.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import miu.waa.lab.entity.Comment;

public interface CommentRepo extends JpaRepository<Comment, Integer> {

}
