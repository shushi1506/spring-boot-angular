package com.example.angular.demo.controller.rest;

import com.example.angular.demo.model.entity.User;
import com.example.angular.demo.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

/**
 * @author tuananh 1/4/2018
 * angular
 * com.example.angular.demo.controller.rest
 */
@RestController
@Configuration
@ComponentScan("com.example.angular.demo.model.repository")
public class TableUserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/user/all",produces={MediaType.APPLICATION_JSON_VALUE},headers = "Accept=application/json" )
    public List<User> getAll() {

        return userRepository.findAll();
    }
    @GetMapping(value = "/user/check",produces={MediaType.APPLICATION_JSON_VALUE},headers = "Accept=application/json" )
    public @ResponseBody
    User checkCotain(@RequestParam String email,@RequestParam String pass) {
        return userRepository.findUserByEmailAndPassword(email,pass);
    }
    @GetMapping(value = "/add/user")
    public @ResponseBody String addNewUser(@RequestParam String email,@RequestParam String name,@RequestParam String password){
        User n=new User(email,name,password);
        userRepository.save(n);
        return "Saved";
    }

}
