import './App.css'
import UserList from './Components/userList'
import AddUserForm from './Components/AddUser'
import EditUserForm from './Components/EditUser'
import DeleteUserForm from './Components/DeleteUser'

function App() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>SBAS Dashboard</h2>
        <nav>
          <ul>
            <li><a href="#users">Employees</a></li>
            <li><a href="#add">Add User</a></li>
            <li><a href="#edit">Edit User</a></li>
            <li><a href="#delete">Delete User</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <section id="users" className="dashboard-section">
          <UserList />
        </section>
        <section id="add" className="dashboard-section">
          <AddUserForm />
        </section>
        <section id="edit" className="dashboard-section">
          <EditUserForm />
        </section>
        <section id="delete" className="dashboard-section">
          <DeleteUserForm />
        </section>
      </main>
    </div>
  )
}

export default App
