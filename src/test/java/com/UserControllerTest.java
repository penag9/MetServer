package com;

import com.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by faina on 09/07/17.
 */
@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class UserControllerTest {

    private static final String HOST = "localhost";
    private static final String PORT = "8080";


    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void publishUser()   {

        String uri = HOST+":"+PORT+"/users";

        User user = new User();

        ResponseEntity<User> createdUser = this.restTemplate.postForEntity(uri, user, User.class);
        assertThat(createdUser).hasFieldOrProperty("user_id");

    }




}
