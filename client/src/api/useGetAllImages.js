import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const client = axios.create({
  baseURL: "https://tikitaka-server.firebaseapp.com",
});

const useGetAllImages = () => {
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    await client
      .get("/images")
      .then((response) => {
        localStorage.setItem("images", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
  };
};

export default useGetAllImages;
