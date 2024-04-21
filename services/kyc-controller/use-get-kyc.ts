import { HTTP } from "@/lib/http-client";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "../query-key";

interface IParameters {
  [key: string]: any;
}

export default function useGetKyc(requestParams: IParameters = {}) {
  const result = useQuery({
    queryKey: [queryKeys.GET_KYC, requestParams],
    queryFn: async () => {
      try {
        const res = await HTTP.get("posts");
        return res?.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return result;
}
