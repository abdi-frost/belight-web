export default function AdminDashboard() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dashboard Cards */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Users</h2>
            <p className="text-3xl font-bold text-primary">1,234</p>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Revenue</h2>
            <p className="text-3xl font-bold text-success">$45,678</p>
          </div>
        </div>
        
        {/* Add more dashboard cards */}
      </div>
    )
  }
  