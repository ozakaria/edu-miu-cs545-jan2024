package com.example.realEstate.entity.httpdata;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FavoriteRequest {
    private long customer_id;
    private long property_id;
}
