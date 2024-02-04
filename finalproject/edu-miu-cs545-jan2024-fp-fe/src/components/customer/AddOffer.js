import React, { useContext, useRef } from "react";
import userAxios from "../../util/axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

function AddOffer() {
  const formRef = useRef();
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  const { pptId } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    const price = formRef.current["price"].value;

    const body = {
      customerId: user.id,
      propertyId: pptId,
      price,
    };
    userAxios
      .post(`http://localhost:8080/api/v1/customers/${user.id}/offers`, body)
      .then(() => {
        alert("Offer made successfully");
        nav("/customer/offers");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="max-w-lg mx-auto mt-6 flex border px-6 py-8 rounded-md flex-col"
    >
      <h1 className="text-center text-lg mb-6 font-medium">Make an offer</h1>
      <input
        required
        className="border px-3 py-2 rounded-md focus:outline-sky-500"
        placeholder="Your offer price"
        name="price"
        type="text"
      />
      <button className="rounded-md mt-8 px-3 py-2 bg-sky-600 p-1 text-gray-200 hover:bg-sky-700 hover:text-white focus:outline-none transitions">
        Send Offer
      </button>
    </form>
  );
}

export default AddOffer;
