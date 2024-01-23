package miu.waa.lab.dto;

import java.util.List;

import lombok.Data;
import miu.waa.lab.entity.Post;

@Data
public class UserDto {

	long id;
    String name;
    List<Post> posts;
}
