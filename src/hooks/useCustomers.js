import { useEffect, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { getCustomers, deleteCustomer } from "../services/customerService";

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [fetchCustomers]);

  const handleDelete = async (customerId) => {
    const { data, status } = await deleteCustomer(customerId);
    if (data && status === 200) {
      setCustomers(customers.filter((c) => c._id !== data._id));
      toast.error("Customer deleted!");
    }
  };

  return {
    customers,
    setCustomers,
    loading,
    handleDelete,
  };
};
