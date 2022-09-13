import axios from "axios";
import { useState, useCallback } from "react";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const useHttpReq = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataFn) => {
    setIsLoading = true;
    setError(null);

    try {
      const response = await client.get(requestConfig.url);
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const data = await response.data;
      console.log(data);
      dataFn(data);
    } catch (error) {
      setError(error.message || "Something Went Wrong");
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttpReq;
