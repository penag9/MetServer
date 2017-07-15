package com.rest;

import com.model.User;
import com.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.service.IUserService;

import javax.websocket.server.PathParam;
import javax.ws.rs.GET;
import javax.ws.rs.HttpMethod;
import javax.ws.rs.Path;
//import javax.ws.rs.PathParam;

/**
 * Created by faina on 09/06/17.
 */

@RestController
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user)    {

        User savedUser = userService.saveUser(user);
        HttpStatus status = HttpStatus.CREATED;
        HttpHeaders headers = new HttpHeaders();

        if ( savedUser == null ) {
            status = HttpStatus.CONFLICT;
        }
        else {
            headers.add("faina", savedUser.getUserName());
        }

        return new ResponseEntity<String>(headers, status);

    }

    @RequestMapping(value = "/users/{user_id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("user_id") String user_id)    {

        return userService.getUser(user_id);

    }
}
