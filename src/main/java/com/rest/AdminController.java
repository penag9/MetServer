package com.rest;

import com.constants.Constants;
import com.model.CredentialsPair;
import com.service.IUserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by faina on 28/10/17.
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AdminController {

    @Autowired
    private IUserService userService;

    private static Logger LOG = Logger.getLogger(AdminController.class.getName());

    @RequestMapping(value = Constants.USERS+"/{user_id}/delete", method = RequestMethod.GET)
    public ResponseEntity<?> authenticateUser(@PathVariable("user_id") String user_id)  {
        userService.delete(user_id);

        return new ResponseEntity<String>(new HttpHeaders(), HttpStatus.OK);
    }
}
