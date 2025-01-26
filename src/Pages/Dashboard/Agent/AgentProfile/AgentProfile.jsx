import Loader from "../../../../Components/Loader/Loader";
import useUser from "../../../../Hooks/useUser";

const AgentProfile = () => {
  const [userData, isLoading] = useUser();
  if (isLoading) return <Loader />;
  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-50 shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
          src={userData?.photo || "https://via.placeholder.com/150"}
          alt="User Avatar"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {userData?.name || "User Name"}
        </h2>
        <h2 className="mt-1  font-bold text-gray-800">
          {userData?.role || "User Name"}
        </h2>
        <p className="mt-1 text-gray-600">
          {userData?.email || "user@example.com"}
        </p>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Logged in as{" "}
          <span className="font-medium text-gray-800">
            {userData?.email || "user@example.com"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AgentProfile;
