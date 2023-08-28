import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserAuthInfo } = useContext(AuthContext);
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserAuthInfo(data);
        router.push("/tasks");
      } else {
        setError("The email or password is incorrect");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-80">
      <div className="w-full shadow-md py-2 px-6 text-center text-white font-semibold bg-green">
        Login
      </div>
      <div className="w-full shadow-md text-sm bg-white flex flex-col py-8 px-10 gap-10">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Email"
            className="focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-800">{error}</p>}
        </form>
      </div>
      <button
        className={`bg-green py-3 px-6 rounded-full text-white font-semibold ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleLogin}
        disabled={isProcessing}
      >
        {isProcessing ? "Logging in..." : "Login"}
      </button>
      <div>
        <a href="/signUp" className="text-black mt-5">
          Create an account
        </a>
      </div>
    </div>
  );
};

export default Login;
