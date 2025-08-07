"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AddAdminPage() {
  const { data: session } = useSession()
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/admin/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, image }),
    })
    router.push("/")
  }

  if (!session) return <p>Unauthorized</p>

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Add New Admin</h1>
      <input placeholder="Name" onChange={e => setName(e.target.value)} className="block mb-2 p-2 w-full border" />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="block mb-2 p-2 w-full border" />
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} className="block mb-2 p-2 w-full border" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Admin</button>
    </form>
  )
}
