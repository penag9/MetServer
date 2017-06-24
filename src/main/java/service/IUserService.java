package service;

import model.User;

/**
 * Created by faina on 09/06/17.
 */
public interface IUserService {

    boolean saveUser(User user);

    User getUser(String username);
}
