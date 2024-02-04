package com.example.realEstate.service;

import com.example.realEstate.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userDetailsService")
@Transactional
public class MyUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public MyUserDetailsService(UserRepository userRepository){
        this.userRepository=userRepository;

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try{
            var user= userRepository.findByEmail(username);
            System.out.println("user: "+user.getId());
            var userDetails = new MyUserDetails(user);
            return userDetails;
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return null;
        }

    }

}
