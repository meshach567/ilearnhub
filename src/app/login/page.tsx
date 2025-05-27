"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Login() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // If the user is loading, we can return null or a loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-6">Sign in to your LMS</h1>
        <Link href="/api/auth/login">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In with Auth0
          </button>
        </Link>
        {error && <p className="text-red-500 mt-4">{error.message}</p>}
      </div>
    </div>
  );
}
