import { useEffect, useState } from "react";

export const useFetchProducts = (url, page) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchData();
  }, [url, page]);

  const fetchData = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setProducts(data?.products);
      setTotalPages(data?.total / 10);
    } catch (err) {
      setError(err.message);
    }
  };
  return { products, totalPages, error };
};
