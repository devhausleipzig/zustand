import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import "../styles/Root.css";

export function RootLayout() {
  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <main className="container root-container">
      <h1>My Blog</h1>
      <button onClick={clear}>Logout</button>
      <Outlet />
    </main>
  );
}
