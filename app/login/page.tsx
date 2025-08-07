"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Welcome to Bundler Admin</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  )
}
