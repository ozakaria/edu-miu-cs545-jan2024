package com.example.realEstate.service;

import com.example.realEstate.entity.Owner;
import com.example.realEstate.entity.Property;
import com.example.realEstate.repository.OwnerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface OwnerService {
    public Owner save(Owner owner);
    public List<Owner> getAllOwners();
    public Owner getOwnerById(long id);
    public Owner updateOwnerById(long id,Owner owner);
    public void deleteById(long id);
    public List<Owner> findAll();
    public void activateOwner(Long id);
    public void deactivateOwner(Long id);
    public void acceptNextOfferStep(long id, long offerId);
    public void declineOffer(long id, long offerId);

}
