package com.rest;

import com.constants.Constants;
import com.model.CredentialsPair;
import com.model.User;
import com.service.IUserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by faina on 07/10/17.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class LogInController {

    @Autowired
    private IUserService userService;

    private static Logger LOG = Logger.getLogger(UserController.class.getName());

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody CredentialsPair pair)    {

        LOG.info("GET "+Constants.USERS+"/{user_id} got credentials "+pair);

        HttpStatus status = HttpStatus.OK;

        if ( ! userService.isPwdValid(pair))  {
            status = HttpStatus.FORBIDDEN;
        }

        return new ResponseEntity<String>(status);

    }


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ResponseEntity<?> authenticateUser()    {

        LOG.info("INSIDE !!! TEST");

        HttpStatus status = HttpStatus.OK;

//        if ( ! userService.isPwdValid(pair))  {
//            status = HttpStatus.FORBIDDEN;
//        }

        return new ResponseEntity<String>(status);

    }



}
