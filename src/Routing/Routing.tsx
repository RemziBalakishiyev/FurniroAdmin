import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AdminRoutes from "./AdminRouting";

const routes: RouteObject[] = [
  {
    path: "app",
    element: <AppLayout />,
    children: AdminRoutes,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
