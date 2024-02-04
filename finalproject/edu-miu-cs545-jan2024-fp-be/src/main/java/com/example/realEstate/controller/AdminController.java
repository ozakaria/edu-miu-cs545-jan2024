package com.example.realEstate.controller;

import com.example.realEstate.service.CustomerService;
import com.example.realEstate.service.OwnerService;
import com.example.realEstate.service.PropertyService;
import com.example.realEstate.entity.Customer;
import com.example.realEstate.entity.Owner;
import com.example.realEstate.entity.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin(origins = {"*"})
public class AdminController {


    @Autowired
    CustomerService customerService;

    @Autowired
    OwnerService ownerService;

    @Autowired
    PropertyService propertyService;

    @GetMapping("/customers")
    public List<Customer> findAllCustomers(){
        return customerService.findAllCustomers();
    }
    @PutMapping("/customers/{id}/activated-customer")
    public void activateCustomer(@PathVariable long id ){
        customerService.activateCustomer(id);
    }

    @PutMapping("/customers/{id}/deactivated-customer")
    public void deactivateCustomer(@PathVariable long id ){
        customerService.deactivateCustomer(id);
    }

    @GetMapping("/owners")
    public List<Owner> findAllOwners(){
        return ownerService.findAll();
    }

    @PutMapping("/owners/{id}/activated-owner")
    public void activateOwner(@PathVariable long id){
        ownerService.activateOwner(id);
    }

    @PutMapping("/owners/{id}/deactivated-owner")
    public void deactivateOwner(@PathVariable long id){
        ownerService.deactivateOwner(id);
    }

    @GetMapping("/property")
    public List<Property> findPropertyByStatus(){
        return propertyService.findPropertyStatus();
    }


}
