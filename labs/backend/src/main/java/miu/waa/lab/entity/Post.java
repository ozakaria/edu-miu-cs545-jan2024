package miu.waa.lab.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Post {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
    String title;
    String content;
    String author;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    List<Comment> comments;

}
