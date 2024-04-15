import { useEffect, useState } from "react";

import { Country } from "../types";
import { getAllCountriesByRegion } from "../api/getAllCountriesByRegion";

const useGetAllCountriesByRegion = (region: string) => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    if (region) {
      getAllCountriesByRegion(region).then((countries: Country[]) => {
        setData(countries);
      });
    }
  }, [region, setData]);

  return { data };
};

export default useGetAllCountriesByRegion;
