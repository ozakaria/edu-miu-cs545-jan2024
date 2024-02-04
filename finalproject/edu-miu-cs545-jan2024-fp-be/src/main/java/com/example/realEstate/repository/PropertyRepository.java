package com.example.realEstate.repository;

import com.example.realEstate.entity.Property;
import com.example.realEstate.entity.enums.PropertyStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {


    //    @Query(value = "select  p from Property p where p.propertyStatus='RENTED' order by p.startedDate desc ")
    @Query(value = "select  p from Property p where p.propertyStatus=:status order by p.createdAt desc ")
    public List<Property> findAllByPropertyStatus(@Param("status") PropertyStatus status);
}
