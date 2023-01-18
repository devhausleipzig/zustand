import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <main className="container login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
