const AdminHome = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <p>Total Users: 120</p>
        </div>

        {/* Properties Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Properties</h2>
          <p>Total Properties: 45</p>
        </div>

        {/* Agents Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Agents</h2>
          <p>Total Agents: 15</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Active Listings</h3>
          <p className="text-2xl font-bold">30</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">New Users</h3>
          <p className="text-2xl font-bold">10</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Closed Deals</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
