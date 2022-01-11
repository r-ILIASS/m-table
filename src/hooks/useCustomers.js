import { useEffect, useCallback, useState } from "react";
import { getCustomers } from "../services/customerService";

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleRender, setToggleRender] = useState(false);
  const [errors, setErrors] = useState(false);

  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error("error ", error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, [toggleRender]);

  return {
    customers,
    setCustomers,
    loading,
    toggleRender,
    setToggleRender,
  };
};
