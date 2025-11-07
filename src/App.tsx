import { ThemeProvider } from "@/Components/theme-provider";
import Auth from "./Page/Auth";
import { Navbar } from "./Components/Navbar";
import { useState } from "react";
import type { authFormType } from "./Types/formTypes";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "@/Components/ui/sonner";
function App() {
  const [authFormType, setAuthFormType] = useState<authFormType>("register");
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="top-center" />
        <div className="items-center w-full h-screen flex flex-col">
          <Navbar setAuthFormType={setAuthFormType} />
          <Auth authFormType={authFormType} setAuthFormType={setAuthFormType} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
