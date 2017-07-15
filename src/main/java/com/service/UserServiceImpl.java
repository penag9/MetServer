package com.service;

import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import com.repository.IUserRepositry;

/**
 * Created by faina on 24/06/17.
 */
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepositry userRepository;


    @Override
    public User saveUser(User user) {
        if (isValiid(user)) {
            User createdUser = userRepository.save(user);
            if (createdUser != null)    {
                return createdUser;
            }
        }

        return null;
    }

    private boolean isValiid(User user) {
        //TODO: implement
        return true;
    }

    @Override
    public User getUser(String id) {
        return userRepository.findOne(id);
    }
}
