import Image from "next/image"
import Header from "./component/header"
import AuthProvider from "./component/AuthProvider"
import RequireAuth from "./component/RequireAuth"
import DashboardPage from "./dashboard/page"

export default function Home() {
  return (
    <AuthProvider>
      <RequireAuth>
        <div className="p-4">
          Hello how are you doing hoping to seeing you 
        </div>
      </RequireAuth>
    </AuthProvider>
  )
}
