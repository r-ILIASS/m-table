import { useState, useEffect } from "react";
import { toast } from "react-toastify";
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

  useEffect(() => {
    if (localStorage.getItem("notified") === "true") return;

    toast.info("I apologize for the slow initial loading!", {
      autoClose: 5000,
    });
    toast.info(
      "My backend is hosted on a free Heroku account. Heroku dynos go to sleep after a slight period of inactivity!",
      { autoClose: 10000 }
    );
    localStorage.setItem("notified", "true");
  }, []);

  return [user];
};
