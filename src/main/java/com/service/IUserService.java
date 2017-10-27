package com.service;

import com.model.CredentialsPair;
import com.model.User;

/**
 * Created by faina on 09/06/17.
 */
public interface IUserService {

    User saveUser(User user);

    User getUser(String username);

    boolean isPwdValid(CredentialsPair pair);

    void delete(String username);
}
