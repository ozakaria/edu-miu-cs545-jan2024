import React, { useContext, useEffect, useState } from 'react'
import userAxios from '../../util/axios';
import { UserContext } from '../../context/UserContext';
import Dropdown from '../views/Dropdown';

function OwnerOffers() {
  const [offers, setOffers] = useState([])
  const { user } = useContext(UserContext);
  const [flag, setFlag] = useState(false)
  const [price, setPrice] = useState('')
  const [text, setText] = useState('')
  const [myProperties, setMyProperties] = useState([])
  const [params, setParams] = useState({})

  useEffect(() => {
    if (user) {
      userAxios.get(`http://localhost:8080/api/v1/owners/${user.id}/offers`)
        .then(res => setOffers(res.data))
        .catch(err => console.log(err))
    }
  }, [flag, user])

  useEffect(() => {
    if (user) {
      userAxios.get(`http://localhost:8080/api/v1/owners/${user.id}/properties`)
        .then(res => {
          const prs = res.data.map(pr => ({ id: pr.id, address: `${pr.address.street}${pr.address.city}` }))
          setMyProperties(prs);
        })
        .catch(err => console.log(err))
    }
  }, [user])

  const getMenuTitle = () => {
    if (user && myProperties.length > 0) {
      return myProperties.map(pro => pro.address)
    }
  }

  const acceptNextStep = (offerId) => {
    userAxios.put(`http://localhost:8080/api/v1/owners/${user.id}/offers/${offerId}/accept`)
      .then(() => { 
        alert("Successfully accepted"); 
        setFlag(!flag) 
        setParams({}); setText(''); setPrice('')
      })
      .catch(err => console.log(err))
  }

  const declineOffer = (offerId) => {
    userAxios.put(`http://localhost:8080/api/v1/owners/${user.id}/offers/${offerId}/decline`)
      .then(() => { 
        alert("Successfully Declined"); 
        setFlag(!flag)
        setParams({}); setText(''); setPrice('')
      })
      .catch(err => console.log(err))
  }

  const getClasses = (val) => {
    switch (val) {
      case "WAITING":
        return "bg-yellow-100 text-yellow-700"
      case "ACCEPTED":
        return "bg-green-200 text-green-700"
      case "DECLINED":
        return "bg-red-200 text-red-700"
      default:
        break;
    }
  }

  const onFilter = () => {
    userAxios.get(`http://localhost:8080/api/v1/owners/${user.id}/offers`, { params })
      .then(res => setOffers(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (!text) {
      setParams(prev => {
        delete prev.city;
        delete prev.state;
        return { ...prev }
      })
      return;
    }
    const query = {};
    if (text.length === 2) {
      query.state = text;
    } else if (text.includes(',')) {
      let splitted = text.split(',')
      query.city = splitted[0].trim();
      query.state = splitted[1].trim();
    } else {
      query.city = text
    }
    setParams(prev => {
      delete prev.city;
      delete prev.state;
      return { ...prev, ...query }
    })
  }, [text])

  const onClicked = (query) => {
    const property = myProperties.find(pr => pr.address === query.propertyId);
    if (property) {
      setParams(prev => ({ ...prev, propertyId: property.id }))
    }
  }

  if (offers.length === 0) {
    return <h1 className="text-center font-semibold text-3xl text-gray-800">
      No offers to your properties yet
    </h1>
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium">My Offers</h1>

      <div className="flex  my-6 items-center">
        <input value={text} onChange={({ target }) => setText(target.value)} type="text" className="mr-4 border gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          placeholder="city, state or both" />
        <input value={price} onChange={({ target }) => { setPrice(target.value); setParams({ ...params, price: target.value }) }} type="text" className="mr-4 border gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          placeholder="Min price" />
        <Dropdown query={params} value="propertyId" title="Choose Property" items={getMenuTitle()} onClicked={onClicked} />
        <button onClick={onFilter} className="mx-4 rounded-md px-5 py-1.5 bg-sky-700 p-1 text-white hover:text-white focus:outline-none ">Filter</button>
        <button onClick={() => { setParams({}); setText(''); setPrice('') }} className="text-sky-700">Clear</button>
      </div>

      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Listing Type
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Property Price
              </th>
              <th scope="col" className="px-6 py-3">
                Offer Price
              </th>
              <th scope="col" className="px-6 py-3">
                Offer Status
              </th>
              <th scope="col" className="px-6 py-3">
                Property Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-gray-100">
            {offers.map(o => (
              <tr key={o.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">
                  {o.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {o.property?.listingType}
                </th>
                <td className="px-6 py-4">
                  {o.property?.address?.street} {o.property?.address?.city}, {o.property?.address?.state}
                </td>
                <td className="px-6 py-4">
                  ${o.property?.price}
                </td>
                <td className="px-6 py-4">
                  {o.price}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-xl font-medium text-xs ${getClasses(o.status)}`}>{o.status}</span>
                </td>
                <td className="px-6 py-4">
                  {o.property?.propertyStatus}
                </td>
                <td className="px-6 py-4">
                  <button disabled={o.property?.propertyStatus === 'RENTED' || o.property?.propertyStatus === 'SOLD'} onClick={() => acceptNextStep(o.id)} className="font-medium text-blue-600 dark:text-blue-500 enabled:hover:underline mr-3 disabled:text-gray-500">Accept</button>
                  <button disabled={o.status === 'DECLINED' || o.property?.propertyStatus === 'RENTED' || o.property?.propertyStatus === 'SOLD'} onClick={() => declineOffer(o.id)} className="font-medium text-red-600 dark:text-blue-500 enabled:hover:underline disabled:text-gray-500">Reject</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OwnerOffers