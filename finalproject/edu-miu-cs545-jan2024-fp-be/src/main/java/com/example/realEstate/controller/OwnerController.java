package com.example.realEstate.controller;

import com.example.realEstate.entity.Offer;
import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.httpdata.PropertyRequest;
import com.example.realEstate.integration.StorageService;
import com.example.realEstate.service.OwnerService;
import com.example.realEstate.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/owners")
@CrossOrigin(origins = {"*"})
@RequiredArgsConstructor
public class OwnerController {

    private final PropertyService propertyService;
    private final OwnerService ownerService;
    private final StorageService storageService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}/properties")
    public List<Property> getAll(@PathVariable long id) {
        return propertyService.getAllPropertiesByOwnerId(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/{id}/properties", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public void save(@PathVariable long id, @ModelAttribute PropertyRequest propertyRequest) {
        propertyService.addProperty(id, propertyRequest);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{OwnerId}/properties/{Id}")
    public Property getById(@PathVariable long id) {
        var property = propertyService.getPropertyById(id);
        return property;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}/properties/{pptId}")
    public void delete(@PathVariable int id, @PathVariable int pptId) {
        propertyService.deleteByIdAndOwnerId(pptId, id);
    }

    @PutMapping("{id}/properties/{pptId}")
    public void update(@PathVariable long id, @PathVariable("pptId") int propertyId, @RequestBody PropertyRequest property) {
        propertyService.updatePropertyById(id, propertyId, property);
    }

    @GetMapping("{id}/offers")
    public List<Offer> searchOffers(
            @PathVariable("id")Long id,
            @RequestParam(value = "propertyId", required = false) Long pptId,
            @RequestParam(value = "price", required = false) Double price,
            @RequestParam(value = "city", required = false) String city,
            @RequestParam(value = "state", required = false) String state,
            @RequestParam(value = "submittedAt",required = false) LocalDateTime submittedAt){
        return propertyService.searchPropertyCriteria(id, pptId, city, state, price, submittedAt);
    }

    @PutMapping("{id}/offers/{offerId}/accept")
    public void acceptOffer(@PathVariable long id, @PathVariable("offerId") long offerId) {
        ownerService.acceptNextOfferStep(id, offerId);
    }

    @PutMapping("{id}/offers/{offerId}/decline")
    public void declineOffer(@PathVariable long id, @PathVariable("offerId") long offerId) {
        ownerService.declineOffer(id, offerId);
    }

    @PostMapping("/upload")
    public void uploadFile(@RequestParam("file") MultipartFile file) {
        storageService.save(file);
    }

}
