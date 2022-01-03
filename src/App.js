import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
