import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Kanbas from './pages/Kanbas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    // <Route path="/kanbas" element={<Kanbas />} />,
  ])
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);