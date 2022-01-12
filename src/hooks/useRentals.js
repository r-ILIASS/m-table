import { useState, useEffect } from "react";

import { getRentals } from "../services/rentalsService";

export const useRentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRentals = async () => {
      const { data, status } = await getRentals();
      if (data && status === 200) {
        setRentals(data);
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  return { rentals, setRentals, loading };
};
