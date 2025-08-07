import AuthProvider from "./component/AuthProvider"
import RequireAuth from "./component/RequireAuth"
import DashboardPage from "./dashboard/page"

export default function Home() {
  return (
    <AuthProvider>
      <RequireAuth>
        <div className="p-4">
          <DashboardPage />
        </div>
      </RequireAuth>
    </AuthProvider>
  )
}
