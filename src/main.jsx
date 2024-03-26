import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUpPage from './SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<SignUpPage></SignUpPage> ,
  },
  {
    path: "dashboarddkjrkdfodserndkfddfdee",
    element:<App></App> ,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
