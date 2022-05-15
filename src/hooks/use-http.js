import { useState, useCallback } from "react";
const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(async (configData, fetchDataHandler) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(configData.url, {
        method: configData.method ?? "GET",
        body: configData.body ?? null,
        headers: configData.headers ?? {},
      });
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const data = await response.json();
      fetchDataHandler(data);
    } catch (err) {
      setError(err.message || "Something went wrong !");
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { fetchData, isLoading, error };
};

export default useHttp;
