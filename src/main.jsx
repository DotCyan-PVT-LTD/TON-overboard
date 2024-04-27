import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Navbar from "./components/Navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="http://localhost:5173/tonconnect-manifest.json">
      {/* <Navbar /> */}
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
