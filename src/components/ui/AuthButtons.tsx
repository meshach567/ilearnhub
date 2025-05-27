// /components/AuthButtons.tsx
"use client";

import LoginPage from "@/app/login/page";
import Logout from "@/app/logout/page";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function AuthButtons() {
  const { user } = useUser();

  return (
    <div className="flex gap-4">
      {user ? (
        <>
          <p className="text-white">Welcome, {user.name}</p>
          <Logout />
        </>
      ) : (
        <>
          <LoginPage />
          <Link
            href="/api/auth/login?screen_hint=signup"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
