import { useEffect, useState } from "react";
import { getAllCountries } from "../api";

import { Country } from "../types";

const useGetAllCountries = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    getAllCountries().then((countries: Country[]) => {
      setData(countries);
    });
  }, [setData]);

  return { data };
};

export default useGetAllCountries;
