import { useEffect, useState } from "react";

import { getAllCountries } from "@api/getAllCountries";

import { Country } from "../types/country";

const useGetAllCountries = () => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllCountries()
      .then((countries: Country[]) => {
        setData(countries);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [setData]);

  return { error, data, loading };
};

export default useGetAllCountries;
