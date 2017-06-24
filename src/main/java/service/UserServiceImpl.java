package service;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import repository.IUserRepositry;

/**
 * Created by faina on 24/06/17.
 */
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepositry userRepository;


    @Override
    public boolean saveUser(User user) {
        if (isValiid(user)) {
            User createdUser = userRepository.save(user);
            if (createdUser != null)    {
                return true;
            }
        }

        return false;
    }

    private boolean isValiid(User user) {
        //TODO: implement
        return true;
    }

    @Override
    public User getUser(String username) {
        return userRepository.findOne(username);
    }
}
