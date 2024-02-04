import { useState } from "react";

const OfferRow = ({ offer, onDelete, onEdit }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isDeletable, setIsDeletable] = useState(false);

  const getClasses = (val) => {
    switch (val) {
      case "WAITING":
        return "bg-yellow-100 text-yellow-700";
      case "ACCEPTED":
        return "bg-green-200 text-green-700";
      case "DECLINE":
        return "bg-red-200 text-red-700";
      default:
        break;
    }
  };

  const handleToggleEdit = () => setIsEditable((prev) => !prev);

  const handleToggleDelete = () => setIsDeletable((prev) => !prev);

  const handleCancel = () => {
    setIsDeletable(false);
    setIsEditable(false);
  };

  const handleSubmit = () => {
    if (isDeletable) {
      onDelete(offer.id);
    } else {
      onEdit(offer.id);
      setIsEditable(false);
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {offer.property?.listingType}
      </th>
      <td className="px-6 py-4">
        {offer.property?.address?.street} {offer.property?.address?.city},{" "}
        {offer.property?.address?.state}
      </td>
      <td className="px-6 py-4">${offer.property?.price}</td>
      <td className="px-6 py-4" style={{ width: 230, height: 65 }}>
        {isEditable ? (
          <input
            id={offer.id}
            type="number"
            className="border py-1 px-0.5 rounded-md shadow-sm"
            placeholder={offer.price}
          />
        ) : (
          `$${offer.price}`
        )}
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1.5 rounded-xl font-medium text-xs ${getClasses(
            offer.status
          )}`}
        >
          {offer.status}
        </span>
      </td>
      <td className="px-6 py-4">{offer.property?.propertyStatus}</td>
      {isEditable || isDeletable ? (
        <td className="px-6 py-4">
          <button
            onClick={handleSubmit}
            className="font-medium text-blue-600 dark:text-blue-500 mr-3 enabled:hover:underline disabled:text-gray-500"
          >
            Ok
          </button>
          <button
            onClick={handleCancel}
            className="font-medium text-red-600 dark:text-blue-500 enabled:hover:underline disabled:text-gray-500"
          >
            Cancel
          </button>
        </td>
      ) : (
        <td className="px-6 py-4">
          <button
            disabled={
              offer.status === "DECLINED" ||
              offer.property?.propertyStatus === "RENTED" ||
              offer.property?.propertyStatus === "SOLD"
            }
            onClick={handleToggleEdit}
            className="font-medium text-blue-600 dark:text-blue-500 mr-3 enabled:hover:underline disabled:text-gray-500"
          >
            Edit
          </button>
          <button
            disabled={
              offer.status === "DECLINED" ||
              offer.property?.propertyStatus === "RENTED" ||
              offer.property?.propertyStatus === "SOLD" ||
              offer.property?.propertyStatus === "CONTINGENT"
            }
            onClick={handleToggleDelete}
            className="font-medium text-red-600 dark:text-blue-500 enabled:hover:underline disabled:text-gray-500"
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default OfferRow;
