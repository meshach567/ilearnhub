import { useUser } from "@auth0/nextjs-auth0";

import Loading from "@/components/ui/Loading";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (!user) {
    return <p className="text-gray-500">You are not logged in.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <Image
          src={user?.picture ?? "/default-profile.png"}
          alt={user?.name ?? "User profile picture"}
          className="mt-4 rounded-full w-24 h-24"
        />
      </div>
    </div>
  );
}
