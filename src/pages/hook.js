import axios from "axios";
import { useQuery } from "react-query";

export const useGetData = () => {
  const request = async () => {
    const config = {
      method: "get",
      url: `http://localhost:3004/posts`,
    };
    try {
      const res = await axios(config);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const query = useQuery(["/get-data"], request);
  return query;
};
