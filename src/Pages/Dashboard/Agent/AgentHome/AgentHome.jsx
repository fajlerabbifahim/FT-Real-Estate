const AgentHome = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

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

      {/* User Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Wishlist</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Comments</h3>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Properties Bought</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <p className="text-2xl font-bold">20</p>
        </div>
      </div>

      {/* Agent and User Property Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Agent Added Properties</h3>
          <p className="text-2xl font-bold">22</p>
        </div>
        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">My Sold Properties</h3>
          <p className="text-2xl font-bold">7</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Requested Properties</h3>
          <p className="text-2xl font-bold">9</p>
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
