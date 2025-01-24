import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useWishList = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user.email;

  const {
    data: wishlist,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishlist", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/${email}`);
      return res.data;
    },
  });

  return [wishlist, isLoading, refetch];
};

export default useWishList;
