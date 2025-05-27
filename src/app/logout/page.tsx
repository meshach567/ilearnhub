import Link from "next/link";
import React from "react";

const Logout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        You have been logged out
      </h1>
      <p className="text-center mt-4">Thank you for using our service!</p>
      <div className="flex justify-center mt-6">
        <Link
          href="/api/auth/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Login Out
        </Link>
      </div>
    </div>
  );
};

export default Logout;
