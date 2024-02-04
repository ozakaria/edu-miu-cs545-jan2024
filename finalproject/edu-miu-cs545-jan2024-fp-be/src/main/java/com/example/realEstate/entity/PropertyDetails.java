package com.example.realEstate.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean pet;
    private String cooling;
    private String heater;
    private double deposit;

    public PropertyDetails(boolean pet, String cooling, String heater, double deposit) {
        this.pet = pet;
        this.cooling = cooling;
        this.heater = heater;
        this.deposit = deposit;
    }
}
