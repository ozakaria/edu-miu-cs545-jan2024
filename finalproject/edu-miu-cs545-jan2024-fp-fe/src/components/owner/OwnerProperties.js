import React, { useContext, useEffect, useState } from 'react'

import userAxios from '../../util/axios';
import { UserContext } from '../../context/UserContext';
import OwnerProperty from './OwnerProperty';

function OwnerProperties() {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(user) {
      userAxios.get(`http://localhost:8080/api/v1/owners/${user.id}/properties`)
      .then(res => setProperties(res.data))
      .catch(err => console.log(err))
    }
  }, [user])
  if (properties.length === 0) {
    return <h1 className="text-center font-semibold text-3xl text-gray-800">
      No properties created
    </h1>
  }

  return (
    <div>
      <div className="flex flex-col justify-between mb-6 items-center">
        <div className="grid gap-8 grid-cols-3 grid-rows-3">
          {properties.map(pro => <OwnerProperty key={pro.id} data={pro} />)}
        </div>
      </div>
    </div>
  )
}

export default OwnerProperties