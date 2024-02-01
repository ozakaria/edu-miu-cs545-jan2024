package miu.waa.lab.dto;

import java.util.List;

import lombok.Data;
import miu.waa.lab.entity.Comment;

@Data
public class PostDto {

	long id;
    String title;
    String content;
    String author;
    List<Comment> comments;
}
