package com.example.realEstate.controller;

import com.example.realEstate.entity.Offer;
import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.httpdata.FavoriteRequest;
import com.example.realEstate.entity.httpdata.OfferRequest;
import com.example.realEstate.entity.httpdata.UpdateOfferPrice;
import com.example.realEstate.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
    final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/{id}/favorites")
    @ResponseStatus(HttpStatus.CREATED)
    public void addToFavorites(@PathVariable long id, @RequestBody FavoriteRequest request) {
        if(id != request.getCustomer_id()) {
            throw new RuntimeException("Wrong ID match");
        }
        customerService.addToFavorites(request.getCustomer_id(), request.getProperty_id());
    }

    @GetMapping("/{id}/favorites")
    @ResponseStatus(HttpStatus.OK)
    public List<Property> getFavorites(@PathVariable long id) {
        List<Property> properties = customerService.getFavoriteProperties(id);
        return properties;
    }

    @DeleteMapping("/{id}/favorites/{propertyId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFromFavorites(@PathVariable long id, @PathVariable long propertyId) {
        customerService.removeFromFavorites(id, propertyId);
    }

    @PostMapping("/{id}/offers")
    @ResponseStatus(HttpStatus.CREATED)
    public void sendOffer(@PathVariable long id, @RequestBody OfferRequest offerRequest) {
        if(id != offerRequest.getCustomerId()) {
            throw new RuntimeException("Wrong ID match");
        }

        try {
            customerService.makeOffer(offerRequest, id);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{id}/offers")
    @ResponseStatus(HttpStatus.OK)
    public List<Offer> getOffers(@PathVariable long id) {
        List<Offer> offers = customerService.getOffers(id);
        return offers;
    }

    @DeleteMapping("/{id}/offers/{offerId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOffer(@PathVariable long id, @PathVariable long offerId) {
        customerService.withdrawOffer(id, offerId);
    }

    @PutMapping("/{id}/offers/{offerId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateOffer(@PathVariable long id, @PathVariable long offerId, @RequestBody UpdateOfferPrice obj) {
        customerService.updateOfferPrice(id, offerId, obj.getPrice());
    }

    @GetMapping("/{id}/offers/{offerId}")
    @ResponseStatus(HttpStatus.OK)
    public Offer getOfferById(@PathVariable long id, @PathVariable long offerId) {
        Offer offer = customerService.getOfferById(id, offerId);
        return offer;
    }
}
