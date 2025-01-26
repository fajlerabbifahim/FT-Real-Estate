import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  return [userData, isLoading];
};

export default useUser;
