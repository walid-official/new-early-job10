import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </StrictMode>
);
