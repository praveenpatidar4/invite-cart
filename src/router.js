import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/", element: <HomePage /> },
]);