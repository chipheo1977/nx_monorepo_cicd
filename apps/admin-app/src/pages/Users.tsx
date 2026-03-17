import { Button } from '@nx-monorepo/ui';

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dan Wilson', email: 'dan@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Eve Martinez', email: 'eve@example.com', role: 'Viewer', status: 'Active' },
];

export function Users() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>👥 Users</h1>
        <p>Manage user accounts and permissions.</p>
      </div>
      <div className="page-content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge badge--${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status status--${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => alert(`Editing ${user.name}`)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
