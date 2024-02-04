package com.example.realEstate.entity.httpdata;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OfferRequest {
    private long customerId;
    private double price;
    private long propertyId;
}
