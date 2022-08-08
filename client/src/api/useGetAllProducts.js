import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get("/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    products,
    loading,
  };
};

export default useGetAllProducts;
