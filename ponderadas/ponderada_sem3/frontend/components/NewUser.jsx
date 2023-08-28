import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

const NewUser = () => {
  const { setAuthState } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setAuthState({ token: null });
        router.push("/");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to create user");
      }
    } catch (error) {
      setError("An error occurred while creating the user");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-80">
      <div className="w-full shadow-md py-2 px-6 text-center text-white font-semibold bg-green">
        Criar conta
      </div>
      <div className="w-full shadow-md text-sm bg-white flex flex-col py-8 px-10 gap-8">
        <form>
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
          isCreating ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleCreateUser}
        disabled={isCreating}
      >
        {isCreating ? "Creating..." : "Create"}
      </button>
    </div>
  );
};

export default NewUser;
