package miu.waa.lab.dto;

import java.util.List;

import lombok.Data;
import miu.waa.lab.entity.Comment;

@Data
public class AddPostDto {

	long id;
    String title;
    String content;
    String author;
    Long user_id;
    List<Comment> comments;
}
