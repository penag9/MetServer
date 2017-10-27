package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

/**
 * Created by faina on 09/06/17.
 */

@SpringBootApplication
public class App /*extends WebMvcConfigurerAdapter*/ {

    public static void main (String [] args) throws IOException {
        //new SpringApplicationBuilder(com.App.class).web(false).run(args);
        SpringApplication.run(App.class, args);
    }
}
