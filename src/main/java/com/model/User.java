package com.model;

import lombok.Getter;
import lombok.ToString;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by faina on 09/06/17.
 */

@Entity
@Table(name = "users")
@Getter
@ToString
public class User {

    /**TODO:
     * CREATE TABLE users
     (
     user_name text NOT NULL,
     password text NOT NULL,
     name text NOT NULL,
     phone_number text NOT NULL,
     email text,
     password_recovery text
     );
     */

    @Id
    @Column(name = "user_name")
    private String userName;

    public String getUserName() {
        return userName;
    }

    //TODO: encrypt pwd!!
    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "password_recovery")
    private String passwordRecovery;

    @Column(name="sex")
    private String sex;

    @Column(name="lang")
    private String lang;

    @Column(name="picture")
    private String picture;

     @Override
    public boolean equals(Object otherUser)   {

        if ( super.equals(otherUser)  )   {
            return true;
        }

        if ( !(otherUser instanceof User) ) {
            return false;
        }

        return false;
    }

}
