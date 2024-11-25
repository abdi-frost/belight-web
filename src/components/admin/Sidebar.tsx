
import Link from 'next/link'
// import { 
//   HomeIcon, 
//   UsersIcon, 
//   ChartBarIcon, 
//   CogIcon 
// } from '@heroicons/react/24/outline'

export default function Sidebar() {
  const menuItems = [
    { 
      href: '/admin/dashboard', 
      label: 'Dashboard', 
      // icon: <HomeIcon className="h-5 w-5" /> 
    },
    { 
      href: '/admin/users', 
      label: 'Users', 
      // icon: <UsersIcon className="h-5 w-5" /> 
    },
    { 
      href: '/admin/analytics', 
      label: 'Analytics', 
      // icon: <ChartBarIcon className="h-5 w-5" /> 
    },
    { 
      href: '/admin/settings', 
      label: 'Settings', 
      // icon: <CogIcon className="h-5 w-5" /> 
    }
  ]

  return (
    <div className="w-64 bg-base-100 border-r border-base-200 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-primary">BeLight</h1>
        <p className="text-sm text-base-content">Admin Dashboard</p>
      </div>
      
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className="flex items-center space-x-2 hover:bg-base-200"
            >
              {/* {item.icon} */}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
