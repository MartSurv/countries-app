import { createContext, useContext, useMemo, useState } from "react";
import { Country } from "../types";

type AppContextType = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

export const AppContext = createContext<AppContextType>({
  countries: [],
  setCountries: () => null,
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const value = useMemo(
    () => ({
      countries,
      setCountries,
    }),
    [countries, setCountries]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
