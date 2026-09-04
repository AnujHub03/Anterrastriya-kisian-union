import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthCont.jsx'

// Add more entries here as you build out more admin sections later
// (Members, Blog, Events, etc.) — each just needs a route + a page.
const navItems = [
  { to: '/dashboard/gallery', label: 'Gallery' },
  { to: '/dashboard/sankalp', label: 'Sankalp Patra' },
  { to: '/dashboard/blog', label: 'Blog' },
]

const AdminLayout = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex bg-base-100">
      <aside className="w-64 shrink-0 bg-base-200 border-r border-base-300 flex flex-col">
        <div className="p-5 border-b border-base-300">
          <p className="text-lg font-black text-green-800">Admin Panel</p>
          <p className="text-xs opacity-60 mt-1 truncate">{user?.name}</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-green-800 text-white' : 'hover:bg-base-300 text-base-content/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-base-300">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-500/10 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout