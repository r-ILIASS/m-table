import React, { useEffect } from "react";
import Spinner from "../common/Spinner";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("jwt");

    window.location = "/";
  }, []);

  return <Spinner />;
};

export default Logout;
