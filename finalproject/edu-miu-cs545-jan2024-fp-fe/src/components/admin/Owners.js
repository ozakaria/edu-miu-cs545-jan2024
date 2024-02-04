import React, { useContext, useEffect, useState } from 'react'
import userAxios from '../../util/axios';
import { UserContext } from '../../context/UserContext';

function Owners() {
  const [owners, setOwners] = useState([])
  const { user } = useContext(UserContext);
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    if (user) {
      userAxios.get(`http://localhost:8080/api/v1/admin/owners`)
        .then(res => setOwners(res.data))
        .catch(err => console.log(err))
    }
  }, [flag, user])
  //firstName, lastName, email, password, status

  const toggleUserStatus = (id) => {
    const owner = owners.find(o => o.id === id)
    if (owner.status === 'ACTIVE') {
      userAxios.put(`http://localhost:8080/api/v1/admin/owners/${id}/deactivated-owner`)
        .then(res => setFlag(!flag))
        .catch(err => console.log(err))
    } else {
      userAxios.put(`http://localhost:8080/api/v1/admin/owners/${id}/activated-owner`)
        .then(res => setFlag(!flag))
        .catch(err => console.log(err))
    }
  }

  const getClasses = (val) => {
    switch (val) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-700"
      case "ACTIVE":
        return "bg-green-200 text-green-700"
      case "DEACTIVE":
        return "bg-red-200 text-red-700"
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium">Owners</h1>


      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Registered date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-gray-100">
            {owners.map(o => (
              <tr key={o.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {o.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {o.firstName}
                </th>
                <td className="px-6 py-4">
                  {o.lastName}
                </td>
                <td className="px-6 py-4">
                  {o.email}
                </td>
                <td className="px-6 py-4">
                  {new Date(o.dateOfRegistration)?.toLocaleString("en-US")}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-xl font-medium text-xs ${getClasses(o.status)}`}>{o.status}</span>
                </td>
                <td className="px-6 py-4">
                  <button disabled={o.status === 'ACTIVE'} onClick={() => toggleUserStatus(o.id)} className="font-medium text-blue-600 dark:text-blue-500 enabled:hover:underline mr-3 disabled:text-gray-500">Approve</button>
                  <button disabled={o.status === 'DEACTIVE'} onClick={() => toggleUserStatus(o.id)} className="font-medium text-red-600 dark:text-blue-500 enabled:hover:underline disabled:text-gray-500">Decline</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Owners