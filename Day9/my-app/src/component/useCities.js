import { useEffect, useState } from "react";
import stateObj from "../utils/state-city.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
    async function fetchCities() {
      // const data=await
      const json = stateObj[state];
      setCities(json);
    }
  }, [state]);

  return cities;
};

export default useCities;
