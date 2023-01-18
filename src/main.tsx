import React from "react";
import ReactDOM from "react-dom/client";
import "@picocss/pico";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home, homeLoader } from "./routes/Home";
import { Post, postLoader } from "./routes/Post";
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: ":postId",
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
