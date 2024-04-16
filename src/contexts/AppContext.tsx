import { createContext, useContext, useMemo, useState } from "react";

interface AppContextValues {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextValues>({
  darkMode: false,
  setDarkMode: () => null,
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
