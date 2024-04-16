import { useEffect, useState } from "react";

import { getAllCountries } from "@api/getAllCountries";

import { Country } from "../types/country";

const useGetAllCountries = () => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCountries().then((countries: Country[]) => {
      setData(countries);
      setLoading(false);
    });
  }, [setData]);

  return { data, loading };
};

export default useGetAllCountries;
