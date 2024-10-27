import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const BASE_URL = "http://localhost:7000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="layout" element={<AppLayout />}>
            {/* <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            /> */}
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<CountryList />} />

            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
CityList.propTypes = {
  cities: PropTypes.array.isRequired, // or PropTypes.arrayOf(PropTypes.object) if it's an array of objects
  isLoading: PropTypes.bool.isRequired, // Use PropTypes.bool if it's a boolean
};
export default App;
