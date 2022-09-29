import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    await client
      .get("/products")
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response.data));
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
  };
};

export default useGetAllProducts;
