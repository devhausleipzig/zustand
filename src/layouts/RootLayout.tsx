import { Outlet } from "react-router-dom";
import "../styles/Root.css";

export function RootLayout() {
  return (
    <main className="container root-container">
      <h1>My Blog</h1>
      <Outlet />
    </main>
  );
}
