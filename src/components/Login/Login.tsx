import { useState } from "react";

function Login() {
  function submit() {
    console.log("login check");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Login</h2>

      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={submit}>
        Login
      </button>
    </>
  );
}

export default Login;
