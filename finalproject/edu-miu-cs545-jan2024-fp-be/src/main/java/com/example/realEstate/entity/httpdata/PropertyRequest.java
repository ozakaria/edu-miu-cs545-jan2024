package com.example.realEstate.entity.httpdata;

import com.example.realEstate.entity.*;
import com.example.realEstate.entity.enums.ListingType;
import com.example.realEstate.entity.enums.PropertyStatus;
import com.example.realEstate.entity.enums.PropertyType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
public class PropertyRequest {
    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;

    private double price;
    private int bedrooms;
    private double bathrooms;

    private double lotSize;
    private LocalDate builtYear;

    @Enumerated(EnumType.STRING)
    private ListingType listingType;

    private Address address;
    private String street;
    private String city;
    private String state;
    private String zipcode;

    private PropertyDetails propertyDetails;
    private boolean pet;
    private String cooling;
    private String heater;
    private double deposit;

    private long ownerId;
    private MultipartFile file;
}
