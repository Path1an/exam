import './App.css'
import UserList from './Components/userList'
import AddUserForm from './Components/AddUser'
import EditUserForm from './Components/EditUser'
import DeleteUserForm from './Components/DeleteUser'

function App() {

  return (
    <>
      <UserList />
      <AddUserForm />
      <EditUserForm />
      <DeleteUserForm />
    </>
  )
}

export default App
