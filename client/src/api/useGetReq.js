import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

const useGetReq = (url, type) => {
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    dispatch(dataActions.setLoading(true));
    await axios
      .get(url)
      .then((response) => {
        if (type === "images") {
          console.log("added images to redux store");
          dispatch(dataActions.setImages(response.data));
        } else {
          console.log("added products to redux store");
          dispatch(dataActions.setProducts(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(dataActions.setLoading(false));
  }, [dispatch, type, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
  };
};

export default useGetReq;
