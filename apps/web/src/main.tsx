import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/theme-provider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IntlProviderWrapper from "./providers/intl-provider";
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
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "train",
        element: <Train />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <IntlProviderWrapper>
      <RouterProvider router={router} />
    </IntlProviderWrapper>
  </ThemeProvider>
);
