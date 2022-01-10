import { useState, useEffect } from "react";
import { getUser } from "../services/userService";

export const useApp = () => {
  const [user, setUser] = useState({});

  const fetchUser = async (token) => {
    try {
      const { data } = await getUser(token);
      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetchUser(jwt);
  }, []);

  return [user];
};
