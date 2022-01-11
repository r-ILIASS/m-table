import { useState, useEffect } from "react";
import { getUser } from "../services/userService";

export const useApp = () => {
  const [user, setUser] = useState();

  const fetchUser = async (token) => {
    const res = await getUser(token);
    if (res.data && res.status === 200) {
      setUser(res.data);
    } else if (res.data && res.status === 400) {
      console.error(res.data);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetchUser(jwt);
  }, []);

  return [user];
};
