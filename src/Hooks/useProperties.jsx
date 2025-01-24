import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

function useProperties() {
  const axiosPublic = useAxiosPublic();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/properties");
      console.log("api response data ha ha pubic", res.data);
      return res.data;
    },
  });
  return [data, refetch, isLoading];
}

export default useProperties;
