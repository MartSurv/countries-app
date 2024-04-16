import { RouterProvider } from "react-router-dom";

import { AppContextProvider } from "@contexts/AppContext";

import router from "./router";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
