import { useEffect, useState } from "react";

import { getCountry } from "@api/getCountry";

import { Country } from "../types/country";

const useGetCountry = (code?: string) => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountry(code)
      .then((country) => {
        setData(country);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [code, setData]);

  return { error, data, loading };
};

export default useGetCountry;
