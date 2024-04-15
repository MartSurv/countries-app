import { useEffect } from "react";
import { getAllCountries } from "../api";

import { useAppContext } from "../contexts/AppContext";

const useGetAllCountries = () => {
  const { countries, setCountries } = useAppContext();

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries);
    });
  }, [setCountries]);

  return { data: countries };
};

export default useGetAllCountries;
