import { useEffect, useState } from "react";

import { getCountry } from "@api/getCountry";

import { Country } from "../types/country";

const useGetCountry = (code?: string) => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountry(code).then((country) => {
      setData(country);
      setLoading(false);
    });
  }, [code, setData]);

  return { data, loading };
};

export default useGetCountry;
