package com.example.realEstate.repository;

import com.example.realEstate.entity.Offer;
import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.enums.OfferStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface OfferRepository extends JpaRepository<Offer, Long> {

    @Query("select o from Offer o where o.id = :id AND o.customer.id = :customerId")
    Offer findByIdAndCustomerId(long id, long customerId);
    Offer findByIdAndAndOwnerId(long id, long ownerId);
    Optional<Offer> findFirstByPropertyAndStatus(Property property, OfferStatus offerStatus);
}
