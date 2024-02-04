package com.example.realEstate.service;

import com.example.realEstate.entity.Admin;
import com.example.realEstate.entity.User;

public interface UserService {

    User getCustomers ();//[with filter]
    User getOwners(); //[with filter]
    User getProperties();// [with filter]
    //activate/deactivate owner
    //activate/deactivate customer


    void activateCustomer(long id);
    void deActivateCustomer(long id);

    void activateOwner(long id);
    void deActivateOwner(long id);

}
