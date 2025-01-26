import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserCog } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const deleteUser = (id) => {};

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto p-5">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.photo} alt={user.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className=" items-center gap-3">
                  <div>
                    <div className="font-medium">{user.role}</div>
                  </div>
                </div>
              </td>

              <td className="flex gap-2">
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-error btn-xs flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
                <div className="dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-xs btn-info flex items-center gap-1"
                  >
                    <FaUserCog /> Role
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li>
                      <button
                        onClick={() => handleRoleChange(user._id, "Admin")}
                      >
                        Make Admin
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleRoleChange(user.id, "Agent")}
                      >
                        Make Agent
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
