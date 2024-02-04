package com.example.realEstate.repository;

import com.example.realEstate.entity.Role;
import com.example.realEstate.entity.enums.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByRole(RoleType role);
}
