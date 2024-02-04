import React from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Anonymous from "./Anonymous";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import Customer from "./Customer";
import Owner from "./Owner";
import Customers from "../components/admin/Customers";
import Favorites from "../components/customer/Favorites";
import Properties from "../components/Properties";
import PropertyDetails from "../components/PropertyDetails";
import CustomerOffers from "../components/customer/CustomerOffers";
import OwnerOffers from "../components/owner/OwnerOffers";
import OwnerProperties from "../components/owner/OwnerProperties";
import Owners from "../components/admin/Owners";
import AddOffer from "../components/customer/AddOffer";
import OwnerPropertyDetails from "../components/owner/OwnerPropertyDetails";
import AddProperty from "../components/owner/AddProperty";

function PageRoutes() {
  return (
    <div>
      <Header />
      <div className="">
      <Routes>
          <Route path="/" element={<Anonymous />} />
          </Routes>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-9">
        <Routes>
          {/* <Route path="/" element={<Anonymous />} /> */}
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="admin" element={<Admin />}>
            <Route path="customers" element={<Customers />} />
            <Route path="owners" element={<Owners />} />
          </Route>
          <Route path="customer" element={<Customer />}>
            <Route path="favorites" element={<Favorites />} />
            <Route path="offers" element={<CustomerOffers />} />
            <Route path="offers/add/:pptId" element={<AddOffer />} />
          </Route>
          <Route path="owner" element={<Owner />}>
            <Route path="offers" element={<OwnerOffers />} />
            <Route path="properties" element={<OwnerProperties />} />
            <Route path="properties/:id" element={<OwnerPropertyDetails />} />
            <Route path="properties/add" element={<AddProperty />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default PageRoutes;
