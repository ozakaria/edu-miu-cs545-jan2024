package com.example.realEstate.entity;
import com.example.realEstate.entity.enums.UserStatus;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer extends User {
    @ManyToMany
    @JoinTable(name = "favorites")
    @JsonManagedReference
    private List<Property> properties;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Offer> offers;

    public Customer(String firstName, String lastName, String email, String password,  UserStatus status) {
        super(firstName, lastName, email, password, status);
    }
}
