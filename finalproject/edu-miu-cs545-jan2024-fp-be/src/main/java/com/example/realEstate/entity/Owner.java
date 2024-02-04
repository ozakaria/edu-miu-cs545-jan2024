package com.example.realEstate.entity;

import com.example.realEstate.entity.enums.UserStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Owner extends User {
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "owner_properties")
    private List<Property> properties;

    public Owner(String firstName, String lastName, String email, String password, UserStatus status) {
        super(firstName, lastName, email, password, status);
    }
}
