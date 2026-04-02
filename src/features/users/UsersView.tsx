import { SectionHeader } from '../../components/SectionHeader';
import { users } from '../../data/demoData';

export function UsersView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Gestión de Usuarios y Roles"
        subtitle="Administración de perfiles, áreas y privilegios."
        action={<button className="btn primary">Crear usuario</button>}
      />

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Área</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
