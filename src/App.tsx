import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AppContextProvider } from "./contexts/AppContext";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
