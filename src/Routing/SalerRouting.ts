import React from "react";
import { RouteObject } from "react-router-dom";
import Product from "../features/Saler/pages/Product";

const SalerRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Product />,
  },
];

export default SalerRoutes;
