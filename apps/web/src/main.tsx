import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/theme-provider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/layouts/dashboard-layout";
import Dashboard from "./screens/dashboard";
import Feedback from "./screens/feedback";
import History from "./screens/history";
import Test from "./screens/test";
import Train from "./screens/train";
import Settings from "./screens/settings";
import LandingPage from "./screens/landing-page";
import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/feedback",
            element: <Feedback />,
          },
          {
            path: "/dashboard/history",
            element: <History />,
          },
          {
            path: "/dashboard/test",
            element: <Test />,
          },
          {
            path: "/dashboard/train",
            element: <Train />,
          },
          {
            path: "/dashboard/settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
