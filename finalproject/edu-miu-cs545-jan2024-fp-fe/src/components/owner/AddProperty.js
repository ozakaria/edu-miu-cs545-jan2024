import React, { useContext, useRef, useState } from "react";
import userAxios from "../../util/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function AddProperty() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [file, setFile] = useState('');
    const [isUploading, setIsUploading] = useState(false)

    const AddHandler = (e) => {
        e.preventDefault();
        const form = formRef.current;
        setIsUploading(true)

        const body = {
            propertyType: form["propertyType"].value,
            price: form["price"].value,
            bedrooms: form["bedrooms"].value,
            bathrooms: form["bathrooms"].value,
            lotSize: form["lotSize"].value,
            builtYear: form["builtYear"].value,
            listingType: form["listingType"].value,
            // propertyDetails: {
                pet: form["pet"].value,
                cooling: form["cooling"].value,
                heater: form["heater"].value,
                deposit: form["deposit"].value,
            // },
            // address: {
                street: form["street"].value,
                city: form["city"].value,
                state: form["state"].value,
                zipcode: form["zipcode"].value,
            // },
            ownerId: user.id
        };
        onUploadHandler(body)
    };

    const cancelUpload = () => {
        setFile(null);
    }

    const onFileChange = ({ target }) => {
        const file = target.files[0];
        setFile(file);
    }

    const onUploadHandler = (data) => {
        const formData = new FormData();
        
        formData.append('file', file);
        for (const [key, value] of Object.entries(data)) {
            if(["propertyDetails", "address"].includes(key)) {
                formData.append(key, JSON.stringify(value));
                continue;
            }
            formData.append(key, value)
        }
        userAxios.post(`http://localhost:8080/api/v1/owners/${user.id}/properties`, formData)
                .then(() => { setIsUploading(false); alert("Property Added Successfully"); navigate("/owner/properties") })
                .catch(err => { setIsUploading(false); console.log(err)});
    }

    if (user && user.status !== 'ACTIVE') {
        return (
            <div className="flex flex-col items-center">
                <h1 className="flex items-center font-semibold text-3xl text-gray-800 mb-4">
                    Your account is under review <ExclamationTriangleIcon className="ml-2 mt-1 h-8 w-8 text-yellow-600" aria-hidden="true" />
                </h1>
                <p className="text-gray-500 text-xl">
                    Admin has to activate your account before you are able to post properties.
                </p>
            </div>
        )
    }

    return (
        <div className="flex  flex-col items-center mb-6">
            <form
                ref={formRef}
                onSubmit={AddHandler}
                className="flex border px-24 py-12 rounded-md flex-col"
            >
                <img
                    className="hidden h-8 w-auto lg:block mb-3"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <h1 className="text-center text-lg mb-6 font-medium">
                    Add your property
                </h1>
                <label className="font-bold" htmlFor="propertyType">
                    Property Type:
                </label>
                <select
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    name="propertyType"
                    id="propertyType"
                >
                    <option value="">Select Property Type</option>
                    <option value="HOUSE">HOUSE</option>
                    <option value="APARTMENT">APARTMENT</option>
                    <option value="CONDO">CONDO</option>
                    {/* Add more options for other property types */}
                </select>
                <br />
                <label className="font-bold" htmlFor="price">
                    Price:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="number"
                    name="price"
                    id="price"
                />
                <br />

                <div className="flex">
                    <div className="flex flex-col mr-3">
                        <label className="font-bold" htmlFor="price">
                            Bed Rooms:
                        </label>
                        <input
                            required
                            className="border px-3 py-2 rounded-md focus:outline-sky-500"
                            type="number"
                            name="bedrooms"
                            id="bedrooms"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="price">
                            Bath Rooms:
                        </label>
                        <input
                            required
                            className="border px-3 py-2 rounded-md focus:outline-sky-500"
                            type="number"
                            name="bathrooms"
                            id="bathrooms"
                        />
                    </div>
                </div>
                <br />
                <label className="font-bold" htmlFor="price">
                    Lot Size:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="number"
                    name="lotSize"
                    id="lotSize"
                />
                <br />

                <label className="font-bold" htmlFor="price">
                    Built Year:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="date"
                    name="builtYear"
                    id="builtYear"
                />

                <br />
                <label className="font-bold" htmlFor="listingType">
                    Listing Type:
                </label>
                <select
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    name="listingType"
                    id="listingType"
                >
                    <option value="">Select Listing Type</option>
                    <option value="RENT">RENT</option>
                    <option value="SALE">SALE</option>
                </select>
                <br />
                <label className="block my-3">
                    <span className="sr-only">Choose photo</span>
                    <input onChange={onFileChange} type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm 
                        file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                </label>
                <br />
                <label className="font-bold mb-2">
                    Address
                </label>
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
                        />
                    </div>
                </div>
                <br />
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
                        />
                    </div>
                </div>
                <br />
                <div className="gap-4">
                    <label className="font-bold mr-4" htmlFor="pet">
                        Pet Allowed
                        <input
                            className="ml-2"
                            type="checkbox"
                            name="pet"
                            id="pet"
                            defaultValue={false}
                        />
                    </label>
                </div>

                <br />
                <label className="font-bold" htmlFor="cooling">
                    Cooling:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="text"
                    name="cooling"
                    id="cooling"
                />
                <br />

                <label className="font-bold" htmlFor="heater">
                    Heater:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="text"
                    name="heater"
                    id="heater"
                />
                <br />
                <label className="font-bold" htmlFor="deposit">
                    Deposit:
                </label>
                <input
                    required
                    className="border px-3 py-2 rounded-md focus:outline-sky-500"
                    type="number"
                    name="deposit"
                    id="deposit"
                />
                <button className="flex justify-center items-center rounded-md mt-8 px-3 py-2 bg-sky-600 p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none transitions">
                    Add property
                    {isUploading && (
                        <span className="inline-block ml-2 animate-spin w-5 h-5 border-2 border-white ease-linear rounded-full border-t-2"></span>
                    )}
                </button>
            </form>
        </div>
    );

    
}

export default AddProperty;
