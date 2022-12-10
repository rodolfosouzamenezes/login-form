import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Login";

import GlobalStyles from "./global";
import { AuthContextProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
