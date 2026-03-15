import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Gallery } from "@/pages/Gallery";
import { GalleryDetail } from "@/pages/GalleryDetail";
import { Donate } from "@/pages/Donate";
import { Contact } from "@/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "gallery/:id", element: <GalleryDetail /> },
      { path: "donate", element: <Donate /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
