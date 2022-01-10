import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
// Hook
import { useApp } from "./hooks/useApp";
// Components
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./components/RegisterForm";
// Css
import LoginForm from "./components/LoginForm";

function App() {
  const [user] = useApp();
  console.log("user ", user);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/" element={<Navigate to="/movies" replace={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1000} pauseOnHover />
    </>
  );
}

export default App;
