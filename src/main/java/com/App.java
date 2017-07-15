package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by faina on 09/06/17.
 */

@SpringBootApplication
public class App {

    public static void main (String [] args)    {
        //new SpringApplicationBuilder(com.App.class).web(false).run(args);
        SpringApplication.run(App.class, args);
    }
}
