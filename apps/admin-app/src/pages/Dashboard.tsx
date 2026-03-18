import { Button } from '@nx-monorepo/ui';

export function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '1,245', icon: '👥' },
    { label: 'Revenue', value: '$48,350', icon: '💰' },
    { label: 'Orders', value: '328', icon: '📋' },
    { label: 'Active Now', value: '42', icon: '🟢' },
  ];

  const stat2 = [
    { label: 'Total Users1', value: '1,2453', icon: '👥' },
    { label: 'Revenue1', value: '$48,3504', icon: '💰' },
    { label: 'Orders1', value: '3284', icon: '📋' },
    { label: 'Active Now1', value: '421', icon: '🟢' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📊 Dashboard</h1>
        <p>
          Overview of your application metrics and key performance indicators.
        </p>
      </div>
      <div className="page-content">
        {stats.map((stat) => (
          <div className="card stat-card" key={stat.label}>
            <span className="stat-icon">{stat.icon}</span>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="page-content">
        {stat2.map((stat) => (
          <div className="card stat-card" key={stat.label}>
            <span className="stat-icon">{stat.icon}</span>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="page-content" style={{ marginTop: 20 }}>
        <div className="card">
          <h2>Quick Actions</h2>
          <p>Manage your application from here.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              variant="primary"
              onClick={() => alert('Report generated!')}
            >
              Generate Report
            </Button>
            <Button variant="outline" onClick={() => alert('Settings opened!')}>
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
