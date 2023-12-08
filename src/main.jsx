import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./app.css";
import router from "./routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
