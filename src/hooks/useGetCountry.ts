import { useEffect, useState } from "react";

import { Country } from "../types";
import { getCountry } from "../api/getCountry";

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
