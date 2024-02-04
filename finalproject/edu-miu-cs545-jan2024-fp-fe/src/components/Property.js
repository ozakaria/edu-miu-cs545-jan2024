// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HeartIcon } from "@heroicons/react/24/outline";
// import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
// import { UserContext } from "../context/UserContext";

// function Property({ data, isFav, toggleFav }) {
//   const { user } = useContext(UserContext);
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     fetch(data.photos[0]?.link)
//       .then((response) => response.blob())
//       .then((blob) => {
//         setImageSrc(URL.createObjectURL(blob));
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="border group rounded-md hover:shadow-2xl transition flex flex-col">
//       <div className="w-full relative h-64">
//         <img src={imageSrc} alt="" className="h-full" />
//         {user && user.role === "CUSTOMER" && (
//           <button
//             onClick={() => toggleFav(data.id, isFav)}
//             type="button"
//             className="absolute bottom-1 right-2 rounded-full p-1 text-red-600 hover:text-white active:scale-110 transition"
//           >
//             {!isFav ? (
//               <HeartIcon className="h-10 w-10" aria-hidden="true" />
//             ) : (
//               <HeartSolid className="h-10 w-10" aria-hidden="true" />
//             )}
//           </button>
//         )}
//       </div>
//       <Link
//         to={"/properties/" + data.id}
//         className="flex flex-col px-2 py-3 flex-1"
//       >
//         <h1 className="text-xl font-semibold">For {data.listingType}</h1>
//         <div className="flex justify-between">
//           <p className="text-gray-500">
//             <strong>{data.bedrooms}</strong> bed
//           </p>
//           <p className="text-gray-500">
//             <strong>{data.bathrooms}</strong> bath
//           </p>
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-gray-500 w-1/2">
//             {data.address?.street}, {data.address?.city}, {data.address?.state}{" "}
//             {data.address?.zipcode}
//           </p>
//           <h1 className="rounded-xl font-medium border text-sky-700 hover:border-sky-700 px-2 py-0.5 transition">
//             ${data.price?.toLocaleString()}
//           </h1>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Property;

import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { HeartIcon } from "@heroicons/react/24/outline";

import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

import { UserContext } from "../context/UserContext";

function Property({ data, isFav, toggleFav }) {
  const { user } = useContext(UserContext);

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    fetch(data.photos[0]?.link)
      .then((response) => response.blob())

      .then((blob) => {
        setImageSrc(URL.createObjectURL(blob));
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="border group rounded-md hover:shadow-md transition flex flex-col">
      <div className="w-full relative h-64">
        <img src={imageSrc} alt="" className="h-full" />

        {user && user.role === "CUSTOMER" && (
          <button
            onClick={() => toggleFav(data.id, isFav)}
            type="button"
            className="absolute bottom-1 right-2 rounded-full p-1 text-red-600 hover:text-white active:scale-110 transition"
          >
            {!isFav ? (
              <HeartIcon className="h-10 w-10" aria-hidden="true" />
            ) : (
              <HeartSolid className="h-10 w-10" aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      <Link
        to={"/properties/" + data.id}
        className="flex flex-col px-2 py-3 flex-1"
      >
        <h1>For {data.listingType}</h1>

        <div className="flex justify-between">
          <p>
            <strong>{data.bedrooms}</strong>
            <span> bed</span>
          </p>

          <p>
            <strong>{data.bathrooms}</strong>
            <span> bath</span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="w-1/2">
            {data.address?.street}, {data.address?.city}, {data.address?.state}{" "}
            {data.address?.zipcode}
          </p>

          <h1 className="rounded-xl font-medium border text-sky-700 hover:border-sky-700 px-2 py-0.5 transition">
            ${data.price?.toLocaleString()}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Property;
