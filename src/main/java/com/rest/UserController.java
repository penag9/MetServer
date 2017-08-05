package com.rest;

import com.model.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.service.IUserService;


/**
 * Created by faina on 09/06/17.
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    private IUserService userService;

    private static Logger LOG = Logger.getLogger(UserController.class.getName());

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user)    {

        LOG.info("POST /users received following user:\n"+user.toString());

        User savedUser = userService.saveUser(user);
        HttpStatus status = HttpStatus.CREATED;
        HttpHeaders headers = new HttpHeaders();

        if ( savedUser == null ) {
            status = HttpStatus.CONFLICT;
        }
        else {
            headers.add("username", savedUser.getUserName());
        }


        LOG.info("returning status "+status+",  headers"+headers);
        return new ResponseEntity<String>(headers, status);

    }

    @RequestMapping(value = "/users/{user_id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("user_id") String user_id)    {

        LOG.info("GET /users/{user_id} got user_id="+user_id);

        return userService.getUser(user_id);

    }

    @RequestMapping(
            value = "/users",
            method = RequestMethod.OPTIONS
    )
    public ResponseEntity handle() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
