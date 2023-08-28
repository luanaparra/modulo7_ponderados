"use client";

import Login from "@/components/Login";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";

export default function Home() {
  const { isUserAuthenticated } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    console.log(isUserAuthenticated())
    isUserAuthenticated() ? router.push("/tasks") : router.push("/");
  }, []);

  return (
    <div className="bg-navyblue w-full h-screen justify-center items-center flex">
      <Login />
    </div>
  );
}
