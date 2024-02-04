package com.example.realEstate.repository;

import com.example.realEstate.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

    @Query("select o from Owner o order by o.dateOfRegistration desc limit 10")
    public List<Owner> findAllOwnerByRegistration();

}
