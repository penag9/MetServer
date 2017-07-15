package com.config;

import com.repository.IUserRepositry;
import com.rest.UserController;
import com.service.IUserService;
import com.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by faina on 08/07/17.
 */
@Configuration
public class SpringConfig {

    @Bean
    public IUserService userService()   {
        return new UserServiceImpl();
    }

}
