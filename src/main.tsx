import "./assets/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CustomerRouter } from "./routers/customer.router.ts";
import { SnackbarProvider } from "notistack";
import { createBrowserRouter } from "react-router-dom";

// Combine all routes into a single router with unique route ids
const CombinedRouter = createBrowserRouter([
  ...CustomerRouter.routes.map((route, index) => ({
    ...route,
    id: `customer-route-${index}`,
  })),
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider router={CombinedRouter} />
    </SnackbarProvider>
  </React.StrictMode>
);
