package com.example.realEstate.entity;

import com.example.realEstate.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "_user")
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @ManyToOne
    private Role role;
    @Enumerated(EnumType.STRING)
    private UserStatus status;
    private LocalDateTime dateOfRegistration;

    public User(String firstName, String lastName, String email, String password,  UserStatus status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.status = status;
        this.dateOfRegistration = LocalDateTime.now();
    }
}
