import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function OwnerProperty({ data }) {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
      fetch(data.photos[0]?.link)
          .then(response => response.blob())
          .then(blob => {
              setImageSrc(URL.createObjectURL(blob));
          })
          .catch(error => console.error(error));
  }, []);

  return (
    <div className="border group rounded-md hover:shadow-md transition flex flex-col">
      <div className="w-full relative h-64">
        <img src={imageSrc} alt="" className="h-full" />
      </div>
      <Link to={"/owner/properties/" + data.id} state={{ property: data }} className="flex-1 flex flex-col px-2 py-3">
        <h1>For {data.listingType}</h1>
        <div className="flex justify-between">
          <p><strong>{data.bedrooms}</strong><span> bed</span></p>
          <p><strong>{data.bathrooms}</strong><span> bath</span></p>
        </div>
        <div className="flex justify-between items-center">
          <p className='w-1/2'>{data.address?.street}, {data.address?.city}, {data.address?.state} {data.address?.zipcode}</p>
          <h1 className="rounded-xl font-medium border text-sky-700 hover:border-sky-700 px-2 py-0.5 transition">${data.price?.toLocaleString()}</h1>

        </div>
      </Link>
    </div>
  )
}

export default OwnerProperty