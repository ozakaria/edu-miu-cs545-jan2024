import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import userAxios from "../../util/axios";

function OwnerPropertyDetails() {
  const [imageSrc, setImageSrc] = useState(null);
  const { id } = useParams();
  const formRef = useRef(null);
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  const { state } = useLocation();
  const property = state?.property;
  console.log(state);

  useEffect(() => {
    if (property) {
      fetch(property.photos[0]?.link)
        .then((response) => response.blob())
        .then((blob) => {
          setImageSrc(URL.createObjectURL(blob));
        })
        .catch((error) => console.error(error));
    }
  }, [property]);

  useEffect(() => {
    if (!property) {
      nav("/owner/properties");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const body = {
      propertyType: property.propertyType,
      price: form["price"].value,
      bedrooms: form["bedrooms"].value,
      bathrooms: form["bathrooms"].value,
      lotSize: form["lotSize"].value,
      builtYear: property.builtYear,
      listingType: property.listingType,
      // photos: [{
      //     "link": "htttp://link.com"
      // }],

      propertyDetails: {
        pet: form["pet"].value,
        cooling: form["cooling"].value,
        heater: form["heater"].value,
        deposit: form["deposit"].value,
      },
      address: {
        street: form["street"].value,
        city: form["city"].value,
        state: form["state"].value,
        zipcode: form["zipcode"].value,
      },
    };
    if (user && property) {
      userAxios
        .put(
          `http://localhost:8080/api/v1/owners/${user?.id}/properties/${property.id}`,
          body
        )
        .then(() => alert("Editted"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {property && (
        <div className="">
          <div className="flex flex-col px-2 py-3 items-start">
            <div className="mt-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={
                  property.propertyStatus === "AVAILABLE"
                    ? "rgb(54, 179, 150)"
                    : property.propertyStatus === "PENDING"
                    ? "#FFC300"
                    : "#C70039"
                }
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                  clipRule="evenodd"
                />
              </svg>
              <label className="text-gray-800">{property.propertyStatus}</label>
            </div>
            <div className="ml-1">
              <label className="text-gray-800">
                For <strong>{property.listingType}</strong>
              </label>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col px-2 py-3 items-start"
          >
            <div className="flex flex-col my-3">
              <label className="font-bold" htmlFor="price">
                Price
              </label>
              <input
                required
                className="border px-3 py-2 rounded-md focus:outline-sky-500"
                placeholder="Price"
                type="text"
                name="price"
                id="price"
                defaultValue={property?.price}
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-bold" htmlFor="lotsize">
                Lot Size
              </label>
              <input
                required
                className="border px-3 py-2 rounded-md focus:outline-sky-500"
                placeholder="Lot size"
                type="text"
                name="lotSize"
                id="lotsize"
                defaultValue={property?.lotSize}
              />
            </div>
            <div className="flex items-center my-3">
              <div className="flex flex-col mr-3">
                <label className="font-bold" htmlFor="bedrooms">
                  Bedrooms
                </label>
                <input
                  required
                  className="border px-3 py-2 rounded-md focus:outline-sky-500"
                  placeholder="Bedrooms"
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  defaultValue={property?.bedrooms}
                />
              </div>
              <div className="flex flex-col mr-3">
                <label className="font-bold" htmlFor="bathrooms">
                  Bathrooms
                </label>
                <input
                  required
                  className="border px-3 py-2 rounded-md focus:outline-sky-500"
                  placeholder="Bathrooms"
                  type="number"
                  name="bathrooms"
                  id="bathrooms"
                  defaultValue={property?.bathrooms}
                />
              </div>
            </div>
            <label className="font-bold mb-2">Address: *</label>
            <div className="flex">
              <div className="flex flex-col mr-3">
                <label className="font-bold" htmlFor="street">
                  Street
                </label>
                <input
                  required
                  className="border px-3 py-2 rounded-md focus:outline-sky-500"
                  placeholder="Street*"
                  type="text"
                  name="street"
                  id="street"
                  defaultValue={property?.address?.street}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="city">
                  City
                </label>
                <input
                  required
                  className="border px-3 py-2 rounded-md focus:outline-sky-500"
                  placeholder="City*"
                  type="text"
                  name="city"
                  id="city"
                  defaultValue={property?.address?.city}
                />
              </div>
            </div>
            <div className="mt-3">
              <div className="flex">
                <div className="flex flex-col mr-3">
                  <label className="font-bold" htmlFor="state">
                    State
                  </label>
                  <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    placeholder="State*"
                    type="text"
                    name="state"
                    id="state"
                    defaultValue={property?.address?.state}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold" htmlFor="zipcode">
                    Zipcode
                  </label>
                  <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    placeholder="Zipcode*"
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    defaultValue={property?.address?.zipcode}
                  />
                </div>
              </div>
              <br />
            </div>
            <div className="my-1.5">
              <p>Pets</p>
              <div className="flex">
                <label className="mr-3" htmlFor="pet-true">
                  <input
                    id="pet-true"
                    type="radio"
                    name="pet"
                    value={true}
                    defaultChecked={property.propertyDetails?.pet}
                  />
                  <span className="ml-1">Allowed</span>
                </label>
                <label htmlFor="pet-false">
                  <input
                    id="pet-false"
                    type="radio"
                    name="pet"
                    value={false}
                    defaultChecked={!property.propertyDetails?.pet}
                  />
                  <span className="ml-1">Not allowed</span>
                </label>
              </div>
            </div>
            <p className="mt-3">Heater</p>
            <input
              required
              className="border px-3 py-2 rounded-md focus:outline-sky-500"
              defaultValue={property.propertyDetails?.heater}
              placeholder="Heater"
              name="heater"
              type="text"
            />
            <p className="mt-3">Cooling</p>
            <input
              required
              className="border px-3 py-2 rounded-md focus:outline-sky-500"
              defaultValue={property.propertyDetails?.cooling}
              placeholder="Cooling"
              name="cooling"
              type="text"
            />
            <p className="mt-3">Deposit</p>
            <input
              required
              className="mb-3 border px-3 py-2 rounded-md focus:outline-sky-500"
              defaultValue={property.propertyDetails?.deposit}
              placeholder="Deposit"
              name="deposit"
              type="number"
            />
            <div className="flex">
              <button className="rounded bg-sky-700 text-white font-semibold px-3 py-2 mr-5">
                Edit Property
              </button>
              <Link
                to="/owner/properties"
                className="rounded border border-sky-700 text-sky-700 font-semibold px-3 py-2"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default OwnerPropertyDetails;
