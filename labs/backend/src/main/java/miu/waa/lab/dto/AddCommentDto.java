package miu.waa.lab.dto;


import lombok.Data;

@Data
public class AddCommentDto {

	long id;
	Long post_id;
    String name;
}
