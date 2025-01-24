import React from "react";

const MakeOffer = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Make an Offer</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Property Title</label>
          <input
            type="text"
            // value={property.propertyTitle}
            readOnly
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Location</label>
          <input
            type="text"
            // value={property.propertyLocation}
            readOnly
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Agent Name</label>
          <input
            type="text"
            // value={property.agentName}
            readOnly
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Offer Amount</label>
          <input
            type="number"
            // value={offerAmount}
            // onChange={(e) => setOfferAmount(e.target.value)}
            className="w-full border rounded-md p-2"
          />
          <p className="text-red-600 mt-2">error</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Buyer Email</label>
          <input
            type="text"
            // value={user.email}
            readOnly
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Buyer Name</label>
          <input
            type="text"
            // value={user.displayName}
            readOnly
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default MakeOffer;
