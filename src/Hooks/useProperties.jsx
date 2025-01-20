import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

function useProperties() {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      console.log("api response data", res.data);
      return res.data;
    },
  });
  return [data, refetch, isLoading];
}

export default useProperties;
