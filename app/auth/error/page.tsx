"use client"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let message = "An unknown error occurred."

  if (error === "AccessDenied") {
    message = "You are not authorized to access the dashboard."
  } else if (error === "OAuthAccountNotLinked") {
    message = "Account already exists with a different sign-in method."
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Authentication Error</h1>
      <p className="text-lg text-gray-700 mb-6">{message}</p>
      <Link
        href="/login"
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Back to Login
      </Link>
    </div>
  )
}
