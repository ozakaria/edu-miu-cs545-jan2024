package com.example.realEstate.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

//@AllArgsConstructor
//@NoArgsConstructor
@Setter
@Getter
@Entity
public class Admin extends User{


//    @OneToMany
//    @JsonManagedReference
//    List<Property> rentedProperties;



}
