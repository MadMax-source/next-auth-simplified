// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
    </div>
  );
}
