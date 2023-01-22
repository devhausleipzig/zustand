import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { exampleDB, User, setUser, useAuthStore } from "../stores/authStore";
import "../styles/Login.css";

const foundUser = (input_mail_we_check: string) => {
  const tempUser = exampleDB.find(element => (element.email === input_mail_we_check))
  if (tempUser === undefined) {
    const err = "no user with this email found"
    return err
  }
  return tempUser
}

export function Login() {
  const { token, setToken } = useAuthStore();
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (JSON.stringify(typeof(foundUser(emailInput))) === "User")
    {
      setToken("test-token");
      setUser(currentUser)
      navigate("/");
    }
    setError("Email and Password dont match");
  }

  if (token) return <Navigate to="/" replace />;

  return (
    <main className="container login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
