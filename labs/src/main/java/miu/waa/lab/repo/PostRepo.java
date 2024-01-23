package miu.waa.lab.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import miu.waa.lab.entity.Post;


public interface PostRepo extends JpaRepository<Post,Integer> {

}
