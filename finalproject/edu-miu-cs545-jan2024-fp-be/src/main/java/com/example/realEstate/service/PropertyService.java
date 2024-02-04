package com.example.realEstate.service;
import com.example.realEstate.entity.Offer;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.enums.ListingType;
import com.example.realEstate.entity.enums.PropertyType;
import com.example.realEstate.entity.httpdata.PropertyRequest;

import java.time.LocalDateTime;
import java.util.List;

public interface PropertyService {
    public void addProperty(long ownerId, PropertyRequest property);
    public List<Property> getAllPropertiesByOwnerId(long ownerId);
    public Property getPropertyById(long id);
    public Property updatePropertyById(long ownerId, long id, PropertyRequest propertyRequest);
    public void deleteByIdAndOwnerId(long id, long ownerId);
    public Page<Property> findPropertiesByCriteria(
            Double minPrice, Double maxPrice,
            ListingType listingType, Integer minBedRooms,
            Integer maxBedRooms, Double minBathRooms, Double maxBathRooms, PropertyType propertyType,
            String city, String state, Pageable pageable);
    public List<Property> findPropertyStatus();
    public List<Offer> searchPropertyCriteria(Long id, Long pptId, String city, String state,
                                              Double price, LocalDateTime submittedAt) ;

}
