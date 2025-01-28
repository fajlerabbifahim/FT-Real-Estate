import React from "react";

const MySoldProperty = () => {
  return (
    <div>
      <h1>My Sold Properties</h1>
      <div className="property-list">
        {/* Example property item */}
        <div className="property-item">
          <h2>Property Title</h2>
          <p>Address: 123 Main St, City, State</p>
          <p>Sold Price: $500,000</p>
          <p>Date Sold: 01/01/2023</p>
        </div>
        {/* Add more property items as needed */}
      </div>
    </div>
  );
};

export default MySoldProperty;
