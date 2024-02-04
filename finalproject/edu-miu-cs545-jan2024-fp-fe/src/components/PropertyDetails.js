import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import userAxios from "../util/axios";
import { UserContext } from "../context/UserContext";

function PropertyDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [property, setProperty] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

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
    axios
      .get(`http://localhost:8080/api/v1/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.log(err));
    if (user) {
      console.log(user);
      fetchFavs();
    }
  }, []);

  const fetchFavs = () => {
    userAxios
      .get(`http://localhost:8080/api/v1/customers/${user.id}/favorites`)
      .then(({ data }) => {
        const ids = data.map((dt) => dt.id);
        const includes = ids.includes(parseInt(id));
        setIsFav(includes);
      })
      .catch((err) => console.log(err));
  };

  const toggleFav = () => {
    if (isFav) {
      userAxios
        .delete(
          `http://localhost:8080/api/v1/customers/${user.id}/favorites/${id}`
        )
        .then(() => {
          setIsFav(false);
        })
        .catch((err) => console.log(err));
    } else {
      userAxios
        .post(`http://localhost:8080/api/v1/customers/${user.id}/favorites`, {
          customer_id: user.id,
          property_id: id,
        })
        .then(() => {
          setIsFav(true);
        });
    }
  };

  return (
    <>
      {property && (
        <div className="border rounded-md shadow-md p-4 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={imageSrc}
                alt=""
                className="h-64 w-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    For {property.listingType}
                  </h1>

                  <div className="flex items-end mt-3">
                    <p className="text-3xl font-bold tracking-tight text-gray-900">
                      ${property.price?.toLocaleString()}
                    </p>
                    <p className="ml-3 text-gray-700">
                      .Desposit: ${property.propertyDetails?.deposit}
                    </p>
                  </div>

                  {/* <h1 className="text-3xl font-bold text-gray-900">
                    ${property.price?.toLocaleString()}
                  </h1> */}
                  <div className="mt-2 flex items-center">
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
                    <label className="text-gray-600">
                      {property.propertyStatus}
                    </label>
                  </div>
                </div>
                <div className="mb-2">
                  <h1 className="text-gray-600">{property.lotSize} sq. feet</h1>
                </div>
                <p className="text-gray-600">
                  {property.address?.street}, {property.address?.city},{" "}
                  {property.address?.state} {property.address?.zipcode}
                </p>
                <div className="flex justify-between">
                  <p className="text-gray-600">
                    <strong>{property.bedrooms}</strong> bed
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>{property.bathrooms}</strong> bath
                  </p>
                </div>
              </div>
              <div className="flex mt-4 justify-end">
                {(!user || (user && user.role === "CUSTOMER")) && (
                  <Link
                    to={
                      user
                        ? "/customer/offers/add/" + property.id
                        : "/login?return=/properties/" + id
                    }
                    className="rounded-md bg-blue-600 text-white font-semibold px-4 py-2 mr-2 hover:bg-blue-700 transition duration-300"
                  >
                    Make an Offer
                  </Link>
                )}
                {user && user.role === "CUSTOMER" && (
                  <button
                    onClick={toggleFav}
                    className={`rounded-md ${
                      isFav ? "bg-red-600" : "bg-green-600"
                    } text-white font-semibold px-4 py-2 hover:bg-opacity-80 transition duration-300`}
                  >
                    {isFav ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 mb-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className="flex flex-col ml-4">
                <label className="text-gray-800 text-md font-bold">
                  {property.propertyType}
                </label>
                <label className="text-gray-500 text-xs">Property Type</label>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>

              <div className="flex flex-col ml-4">
                <label className="text-gray-800 text-md font-bold">
                  {property.builtYear?.split("-")[0]}
                </label>
                <label className="text-gray-500 text-xs">Year built</label>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 228.804 228.804"
              >
                <g>
                  <path
                    d="M184.475,161.189c-2.368-3.731-19.724-30.767-34.558-45.068c-12.376-11.883-30.9-12.227-33-12.227
		c-0.191,0.001-0.383,0.008-0.571,0.023h-4.491c-1.984,0-19.761,0.338-32.763,12.042C63.05,130.416,45.3,159.575,44.058,161.63
		c-9.403,14.867-15.166,24.536-15.166,35.286c0,19.371,14.193,31.888,36.158,31.888h98.711c21.959,0,36.148-12.529,36.148-31.92
		c0-10.845-5.777-20.5-15.205-35.353C184.63,161.415,184.554,161.3,184.475,161.189z M163.761,213.804H65.05
		c-7.902,0-21.158-2.194-21.158-16.888c0-6.279,4.126-13.489,12.885-27.334c0.029-0.046,0.058-0.093,0.087-0.14
		c0.175-0.29,17.631-29.146,32.267-42.336c8.925-8.034,22.597-8.187,22.73-8.188h5.08c0.143,0,0.284-0.004,0.426-0.012
		c2.441,0.092,14.739,0.907,22.152,8.024c14.283,13.772,32.324,42.347,32.505,42.634c0.081,0.129,0.165,0.254,0.253,0.376
		c9.316,14.698,12.633,21.018,12.633,26.942C184.909,210.868,173.408,213.804,163.761,213.804z"
                  />
                  <path
                    d="M78.198,85.731c16.929,0,30.189-18.831,30.189-42.87C108.388,18.827,95.127,0,78.198,0
		C61.271,0,48.011,18.827,48.011,42.861C48.011,66.901,61.271,85.731,78.198,85.731z M78.198,15
		c7.184,0,15.189,11.442,15.189,27.861c0,16.424-8.006,27.87-15.189,27.87s-15.188-11.446-15.188-27.87
		C63.011,26.442,71.015,15,78.198,15z"
                  />
                  <path
                    d="M38.664,137.296c2.951,0,5.77-0.607,8.413-1.82c13.162-6.12,16.827-25.327,8.34-43.731
		C48.832,77.493,36.65,67.918,25.101,67.918c-2.954,0-5.777,0.609-8.401,1.817C3.52,75.834-0.157,95.045,8.332,113.481
		c6.585,14.244,18.774,23.814,30.33,23.815H38.664z M21.952,107.197c-5.076-11.024-3.635-21.683,1.033-23.842
		c0.639-0.294,1.33-0.437,2.115-0.437c4.71,0,12.162,5.298,16.697,15.113c5.076,11.008,3.635,21.668-1.011,23.828
		c-0.642,0.294-1.336,0.438-2.123,0.438C33.947,122.296,26.486,117,21.952,107.197z"
                  />
                  <path
                    d="M150.591,85.731c16.923,0,30.18-18.831,30.18-42.87C180.771,18.827,167.514,0,150.591,0
		c-16.939,0-30.207,18.827-30.207,42.861C120.384,66.901,133.652,85.731,150.591,85.731z M150.591,15
		c7.18,0,15.18,11.442,15.18,27.861c0,16.424-8,27.87-15.18,27.87c-7.192,0-15.207-11.446-15.207-27.87
		C135.384,26.442,143.399,15,150.591,15z"
                  />
                  <path
                    d="M212.104,69.737c-2.617-1.212-5.447-1.827-8.411-1.827c-11.532,0-23.71,9.578-30.299,23.827
		c-8.525,18.396-4.863,37.61,8.368,43.756c2.609,1.197,5.429,1.804,8.38,1.804c11.559,0,23.745-9.572,30.324-23.822
		C228.962,95.052,225.287,75.839,212.104,69.737z M206.846,107.19c-4.53,9.812-11.987,15.106-16.704,15.106
		c-0.788,0-1.482-0.143-2.093-0.423c-4.696-2.181-6.141-12.835-1.043-23.835c4.544-9.827,11.988-15.129,16.687-15.129
		c0.781,0,1.47,0.143,2.107,0.438C210.484,85.517,211.926,96.175,206.846,107.19z"
                  />
                </g>
              </svg>

              <div className="flex flex-col ml-4">
                <label className="text-gray-800 text-md font-bold">
                  {property.propertyDetails?.pet ? "Allowed" : "Not Allowed"}
                </label>
                <label className="text-gray-500 text-xs">Pets allowed</label>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M381.388,151.594v-38.745c0-9.075-3.532-17.604-9.944-24.014c-6.41-6.414-14.94-9.945-24.015-9.945
			c-18.726,0-33.959,15.234-33.959,33.959v19.331h-36.571v-19.331c0-18.726-15.234-33.959-33.959-33.959
			c-18.725,0-33.959,15.234-33.959,33.959v19.331h-36.571v-19.331c0-18.726-15.235-33.959-33.959-33.959
			c-18.725,0-33.959,15.234-33.959,33.959v19.331H80.98v15.673h23.51v15.673H80.98V179.2h23.51v153.6H67.918V112.849
			c0-18.726-15.235-33.959-33.959-33.959C15.235,78.89,0,94.123,0,112.849v286.302c0,18.726,15.235,33.959,33.959,33.959
			c18.725,0,33.959-15.234,33.959-33.959V379.82h36.571v19.331c0,18.726,15.235,33.959,33.959,33.959
			c18.725,0,33.959-15.234,33.959-33.959V379.82h23.51v-15.674h-23.51v-15.673h23.51V332.8h-23.51V179.2h36.571v219.951
			c0,18.726,15.235,33.959,33.959,33.959c18.726,0,33.959-15.234,33.959-33.959V379.82h36.571v19.331
			c0,18.726,15.234,33.959,33.959,33.959c18.726,0,33.959-15.234,33.959-33.959v-63.425h-15.673v63.425
			c0,10.082-8.203,18.286-18.286,18.286s-18.286-8.203-18.286-18.286V286.887h-15.674V332.8h-36.571V179.2h36.571v21.232h15.674
			v-87.583c0-10.082,8.203-18.286,18.286-18.286c4.888,0,9.48,1.901,12.933,5.354c3.452,3.451,5.353,8.044,5.353,12.932v38.745
			H381.388z M52.245,399.151c0,10.082-8.203,18.286-18.286,18.286c-10.082,0-18.286-8.203-18.286-18.286V112.849
			c0-10.082,8.203-18.286,18.286-18.286c10.082,0,18.286,8.203,18.286,18.286V399.151z M104.49,364.147H67.918v-15.673h36.571
			V364.147z M156.735,399.151c0,10.082-8.203,18.286-18.286,18.286s-18.286-8.203-18.286-18.286V112.849
			c0-10.082,8.203-18.286,18.286-18.286s18.286,8.203,18.286,18.286V399.151z M208.98,163.527h-36.571v-15.673h36.571V163.527z
			 M261.224,399.151c0,10.082-8.204,18.286-18.286,18.286s-18.286-8.203-18.286-18.286V112.849c0-10.082,8.203-18.286,18.286-18.286
			s18.286,8.203,18.286,18.286V399.151z M313.469,348.473v15.673h-36.571v-15.673H313.469z M313.469,163.527h-36.571v-15.673h36.571
			V163.527z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M471.271,182.384c-16.243-16.075-37.774-24.928-60.626-24.928c-47.532,0-86.204,38.672-86.204,86.204
			c0,47.532,38.672,86.204,86.204,86.204c4.188,0,8.404-0.305,12.531-0.907l-2.263-15.51c-3.38,0.494-6.836,0.744-10.268,0.744
			c-38.891,0-70.531-31.64-70.531-70.531c0-38.891,31.64-70.531,70.531-70.531c38.454,0,70.09,31.277,70.52,69.72l15.673-0.176
			C496.583,219.856,487.502,198.445,471.271,182.384z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M410.645,188.801c-30.248,0-54.857,24.609-54.857,54.857h15.673c0-21.606,17.577-39.184,39.184-39.184
			s39.184,17.577,39.184,39.184h15.673C465.502,213.41,440.893,188.801,410.645,188.801z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M478.697,250.819l-5.881-6.676l-5.881,6.676c-5.561,6.313-33.303,38.785-33.303,58.079
			c0,21.606,17.577,39.184,39.184,39.184c21.606,0,39.184-17.577,39.184-39.184C512,289.604,484.258,257.133,478.697,250.819z
			 M472.816,332.408c-12.963,0-23.51-10.547-23.51-23.51c0-8.368,12.326-26.839,23.512-40.723
			c11.186,13.874,23.508,32.341,23.508,40.723C496.327,321.861,485.779,332.408,472.816,332.408z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M410.645,215.445c0,0-11.603,38.413-11.603,44.821c0,6.408,5.195,11.603,11.603,11.603s11.603-5.195,11.603-11.603
			C422.247,253.859,410.645,215.445,410.645,215.445z"
                    />
                  </g>
                </g>
              </svg>
              <div className="flex flex-col ml-4">
                <label className="text-gray-800 text-md font-bold">
                  {property.propertyDetails?.heater}
                </label>
                <label className="text-gray-500 text-xs">Heater</label>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000"
                  d="M23.0261 7.548V11.578L27.0521 9.253L28.0521 10.986L23.0261 13.887V20.815L29.0261 17.351V11.548H31.0261V16.196L34.5171 14.182L35.5171 15.914L32.0261 17.929L36.0521 20.253L35.0521 21.986L30.0261 19.083L24.0261 22.547L30.0271 26.012L35.0521 23.11L36.0521 24.842L32.0261 27.166L35.5171 29.182L34.5171 30.914L31.0261 28.899V33.548H29.0261V27.744L23.0261 24.279V31.208L28.0521 34.11L27.0521 35.842L23.0261 33.517V37.548H21.0261V33.517L17.0001 35.842L16.0001 34.11L21.0261 31.208V24.279L15.0261 27.743V33.548H13.0261V28.898L9.53606 30.914L8.53606 29.182L12.0251 27.166L8.00006 24.842L9.00006 23.11L14.0251 26.011L20.0251 22.547L14.0261 19.083L9.00006 21.986L8.00006 20.253L12.0261 17.929L8.53606 15.914L9.53606 14.182L13.0261 16.196V11.548H15.0261V17.351L21.0261 20.815V13.887L16.0001 10.986L17.0001 9.253L21.0261 11.578V7.548H23.0261Z"
                />
              </svg>
              <div className="flex flex-col ml-4">
                <label className="text-gray-800 text-md font-bold">
                  {property.propertyDetails?.cooling}
                </label>
                <label className="text-gray-500 text-xs">Cooling</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropertyDetails;
