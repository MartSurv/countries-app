import { useEffect, useState } from "react";

import { getAllCountries } from "@api/getAllCountries";

import { Country } from "../types/country";

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
