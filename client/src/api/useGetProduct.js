import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const useGetProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get(`/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    product,
    loading,
  };
};

export default useGetProduct;
