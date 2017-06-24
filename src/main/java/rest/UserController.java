package rest;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import service.IUserService;

/**
 * Created by faina on 09/06/17.
 */

@RestController
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/user/", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user)    {

        boolean isSaved = userService.saveUser(user);

        HttpHeaders headers = new HttpHeaders();
        HttpStatus status = HttpStatus.CREATED;
        if ( !isSaved ) {
            status = HttpStatus.CONFLICT;
        }

        return new ResponseEntity<String>(headers, status);

    }
}
