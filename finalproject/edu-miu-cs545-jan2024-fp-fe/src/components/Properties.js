import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

import userAxios from "../util/axios";

import Property from "./Property";

import Dropdown from "./views/Dropdown";

import { UserContext } from "../context/UserContext";

function Properties() {
  const BASE_URL = "http://localhost:8080/api/v1/properties";

  const [properties, setProperties] = useState([]);

  const [pagination, setPagination] = useState({});

  const propertyTypes = ["HOUSE", "APARTMENT", "CONDO", "TOWNHOUSE"];

  const [text, setText] = useState("");

  const listingTypes = ["RENT", "SALE"];

  const numbers = [1, 2, 3, 4, 5];

  const [params, setParams] = useState({});

  const [favs, setFavs] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchData();

    if (user && user.role === "CUSTOMER") {
      fetchFavs();
    }
  }, [params]);

  const fetchData = async () => {
    console.log("Params:", params);

    axios

      .get(BASE_URL, { params })

      .then((res) => {
        console.log("API Response:", res.data);

        setProperties(res.data.content);

        setPagination({
          totalPages: res.data.totalPages,

          currentPage: res.data.number + 1,
        });
      })

      .catch((err) => console.log(err));
  };

  const fetchFavs = async () => {
    userAxios

      .get(`http://localhost:8080/api/v1/customers/${user.id}/favorites`)

      .then(({ data }) => {
        const ids = data.map((dt) => dt.id);

        console.log(ids);

        setFavs(ids);
      })

      .catch((err) => console.log(err));
  };

  const checkIfFav = (pptId) => {
    return favs.includes(pptId);
  };

  const onClicked = (query) => {
    setParams((prev) => ({ ...prev, ...query }));
  };

  const toggleFav = async (id, isFav) => {
    if (isFav) {
      await userAxios

        .delete(
          `http://localhost:8080/api/v1/customers/${user.id}/favorites/${id}`
        )

        .then(() => {
          const ids = favs.filter((fav) => fav !== id);

          console.log(ids);

          setFavs(ids);
        })

        .catch((err) => console.log(err));
    } else {
      await userAxios

        .post(`http://localhost:8080/api/v1/customers/${user.id}/favorites`, {
          customer_id: user.id,

          property_id: id,
        })

        .then(() => {
          const ids = [...favs, id];

          console.log(ids);

          setFavs(ids);
        });
    }
  };

  const handlePageChange = (pageNumber) => {
    setParams((prevParams) => ({
      ...prevParams,

      page: pageNumber - 1,
    }));
  };

  return (
    <div className="">
      <div className="flex justify-between mb-6 items-center">
        <input
          value={text}
          onChange={({ target }) => setText(target.value)}
          type="text"
          className="border gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          placeholder="city, state or both"
        />

        <Dropdown
          query={params}
          value="propertyType"
          title="Property Type"
          items={propertyTypes}
          onClicked={onClicked}
        />

        <Dropdown
          query={params}
          value="listingType"
          title="Listing Type"
          items={listingTypes}
          onClicked={onClicked}
        />

        <Dropdown
          query={params}
          value="minBedRooms"
          title="Min Beds"
          items={numbers}
          onClicked={onClicked}
        />

        <Dropdown
          query={params}
          value="maxBedRooms"
          title="Max Beds"
          items={numbers}
          onClicked={onClicked}
        />

        <Dropdown
          query={params}
          value="minBathRooms"
          title="Min Baths"
          items={numbers}
          onClicked={onClicked}
        />

        <Dropdown
          query={params}
          value="maxBathRooms"
          title="Max Baths"
          items={numbers}
          onClicked={onClicked}
        />
        {/* <button
          onClick={fetchData}
          className="rounded-md px-5 py-1.5 bg-sky-700 p-1 text-white hover:text-white focus:outline-none"
        >
          Filter
        </button> */}

        <button
          onClick={() => {
            setParams({});

            setText("");
          }}
          className="rounded-md px-5 py-1.5 bg-sky-700 p-1 text-white hover:text-white focus:outline-none"
        >
          Clear
        </button>
      </div>

      <div className="grid gap-8 grid-cols-3 grid-rows-3">
        {properties.map((pro) => (
          <Property
            isFav={checkIfFav(pro.id)}
            key={pro.id}
            data={pro}
            toggleFav={toggleFav}
          />
        ))}
      </div>

      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <nav className="flex">
            <ul className="flex items-center">
              {Array.from(Array(pagination.totalPages).keys()).map((page) => (
                <li
                  key={page}
                  className={`cursor-pointer px-2 py-1 mx-1 rounded-full ${
                    pagination.currentPage === page + 1
                      ? "bg-sky-700 text-white"
                      : "bg-white text-sky-700 hover:bg-sky-700 hover:text-white"
                  }`}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </li>
              ))}
            </ul>
          </nav>

          <br />

          <br />

          <br />
        </div>
      )}
    </div>
  );
}

export default Properties;
