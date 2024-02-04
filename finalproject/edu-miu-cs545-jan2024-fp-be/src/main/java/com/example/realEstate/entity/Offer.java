package com.example.realEstate.entity;

import com.example.realEstate.entity.enums.OfferStatus;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonBackReference
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    private double price;

    private LocalDateTime submittedAt;

    @Enumerated(EnumType.STRING)
    private OfferStatus status;
    private long ownerId;
}
