package com.example.angular.demo.model.repository;

import com.example.angular.demo.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author tuananh 1/4/2018
 * angular
 * com.example.angular.demo.model.repository
 */
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Override
    List<User> findAll();

    User findUserByEmailAndPassword(String email,String pass);
}
