export default function AdminHeader() {
  return (
    <header className="bg-base-100 border-b border-base-200 p-4 flex justify-end items-center space-x-4">
      {/* Notifications */}
      <button className="btn btn-ghost btn-circle">
        {/* <BellIcon className="h-5 w-5" /> */}
      </button>
      
      {/* Settings */}
      <button className="btn btn-ghost btn-circle">
        {/* <CogIcon className="h-5 w-5" /> */}
      </button>
      
      {/* User Profile */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          {/* <UserCircleIcon className="h-8 w-8" /> */}
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </header>
  )
}