package com.url_shortener.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.url_shortener.models.User;
import com.url_shortener.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = (User) userRepository.findByUsername(username)
                .orElseThrow(() -> new  UsernameNotFoundException("User not found with username: " + username));
        return UsersDetailsImpl.build(user);
    }
}
