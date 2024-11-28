import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import Root from "@/routes/root";
import ErrorPage from "@/error-page";
import LoginPage from "@/routes/signin";
import RegisterPage from "@/routes/signup";
import StorefrontPage from "@/routes/storefront";
import DashboardPage from "@/routes/dashboard";
import Catalog from "./routes/catalog";
import Orders from "./routes/orders";
import Notifications from "./routes/notifications";
import Profile from "./routes/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ":username",
                element: <StorefrontPage />,
            },
            {
                path: ":username/dashboard",
                element: <DashboardPage />,
                children: [
                    {
                        path: "catalog",
                        element: <Catalog />,
                    },
                    {
                        path: "orders",
                        element: <Orders />,
                    },
                    {
                        path: "notifications",
                        element: <Notifications />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "products/:id",
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <RegisterPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
