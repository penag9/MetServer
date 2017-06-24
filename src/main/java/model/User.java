package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by faina on 09/06/17.
 */

@Entity
@Table(name = "users")
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

    //TODO: encrypt pwd!!
    public String getPassword() {
        return password;
    }

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    @Column(name = "phone_number")
    private String phone;

    public String getPhone() {
        return phone;
    }

    @Column(name = "email")
    private String email;

    public String getEmail() {
        return email;
    }

    @Column(name = "password_recovery")
    private String passwordRecovery;

    public String getpasswordRecovery() {
        return passwordRecovery;
    }

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
