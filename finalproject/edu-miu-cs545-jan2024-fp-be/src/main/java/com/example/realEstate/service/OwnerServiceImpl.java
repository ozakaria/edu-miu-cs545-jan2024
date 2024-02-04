package com.example.realEstate.service;

import com.example.realEstate.entity.Offer;
import com.example.realEstate.entity.Owner;
import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.enums.ListingType;
import com.example.realEstate.entity.enums.OfferStatus;
import com.example.realEstate.entity.enums.PropertyStatus;
import com.example.realEstate.entity.enums.UserStatus;
import com.example.realEstate.repository.OfferRepository;
import com.example.realEstate.repository.OwnerRepository;
import com.example.realEstate.repository.PropertyRepository;
import com.example.realEstate.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService {
    private final OwnerRepository ownerRepository;
    private final OfferRepository offerRepository;
    private final PropertyRepository propertyRepository;

    @Override
    public Owner save(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner getOwnerById(long id) {
        return ownerRepository.findById(id).orElseThrow();
    }

    @Override
    public Owner updateOwnerById(long id, Owner owner) {
        Owner updated = ownerRepository.findById(id).get();
        updated=owner;
        return ownerRepository.save(updated);
    }

    @Override
    public void deleteById(long id) {
        ownerRepository.deleteById(id);

    }


    @Override
    public List<Owner> findAll() {
        return ownerRepository.findAllOwnerByRegistration();
    }

    @Override
    public void activateOwner(Long id) {
        var isOwner= ownerRepository.findById(id);
        if(isOwner.isPresent()){
            isOwner.get().setStatus(UserStatus.ACTIVE);
            ownerRepository.save(isOwner.get());
        }
    }


    @Override
    public void deactivateOwner(Long id) {
        var isOwner= ownerRepository.findById(id);
        if(isOwner.isPresent()){
            isOwner.get().setStatus(UserStatus.DEACTIVE);
            ownerRepository.save(isOwner.get());
        }
    }

    @Override
    public void acceptNextOfferStep(long ownerId, long offerId) {
        Offer offer = offerRepository.findByIdAndAndOwnerId(offerId, ownerId);
        Property property = offer.getProperty();
        switch (property.getPropertyStatus()) {
            case AVAILABLE:
                property.setPropertyStatus(PropertyStatus.PENDING);
                offer.setStatus(OfferStatus.ACCEPTED);
                break;
            case PENDING:
                property.setPropertyStatus(PropertyStatus.CONTINGENT);
                offer.setStatus(OfferStatus.ACCEPTED);
                break;
            case CONTINGENT:
                if(property.getListingType() == ListingType.RENT) {
                    property.setPropertyStatus(PropertyStatus.RENTED);
                    offer.setStatus(OfferStatus.ACCEPTED);
                } else {
                    property.setPropertyStatus(PropertyStatus.SOLD);
                    offer.setStatus(OfferStatus.ACCEPTED);
                }
                break;
            default:
                property.setPropertyStatus(PropertyStatus.PENDING);
                offer.setStatus(OfferStatus.ACCEPTED);
        }
        offerRepository.save(offer);
        propertyRepository.save(property);
    }

    @Override
    public void declineOffer(long ownerId, long offerId) {
        Offer offer = offerRepository.findByIdAndAndOwnerId(offerId, ownerId);
        Property property = offer.getProperty();
        offer.setStatus(OfferStatus.DECLINED);
        offerRepository.save(offer);
        property.setPropertyStatus(PropertyStatus.AVAILABLE);
        propertyRepository.save(property);
    }
}
