import { useEffect, useState } from "react";

import { getCountry } from "@api/getCountry";

import { Country } from "../types/country";

const useGetCountry = (code?: string) => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    getCountry(code).then((country) => {
      setData(country);
    });
  }, [code, setData]);

  return { data };
};

export default useGetCountry;
