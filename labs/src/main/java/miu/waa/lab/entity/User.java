package miu.waa.lab.entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="Users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String name;
    private String email;
    private String password;
    @OneToMany(cascade= CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<Post> posts;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable
    private List<Role> roles;

}
