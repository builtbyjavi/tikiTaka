import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const useGetAllImages = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get("/images")
        .then((response) => {
          setImages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    images,
    loading,
  };
};

export default useGetAllImages;
