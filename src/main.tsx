import {
  StrictMode,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  ThemeProvider,
} from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

createRoot(
  document.getElementById(
    "root"
  )!
).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);