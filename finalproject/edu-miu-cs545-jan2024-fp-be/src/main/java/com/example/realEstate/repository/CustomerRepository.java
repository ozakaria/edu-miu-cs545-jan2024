package com.example.realEstate.repository;

import com.example.realEstate.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("select c from Customer c order by c.dateOfRegistration desc limit 10")
    public List<Customer> sortByDateOfRegistrationDsc();
//    public List<Customer> findByDateOfRegistration

}
