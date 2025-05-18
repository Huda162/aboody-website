'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url: string) {
  const [data, setData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://aboody.ps/admin/api/${url}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [url]);

  return { data, loading };
}
