import { useEffect, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { getCustomers, deleteCustomer } from "../services/customerService";

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleRender, setToggleRender] = useState(false);

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
  }, [toggleRender, fetchCustomers]);

  const handleDelete = async (customerId) => {
    await deleteCustomer(customerId);
    toast.error("Customer deleted!");
    setToggleRender(!toggleRender);
  };

  return {
    customers,
    setCustomers,
    loading,
    toggleRender,
    setToggleRender,
    handleDelete,
  };
};
