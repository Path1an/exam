import {useState, useEffect} from 'react'

function UserList() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch('http://localhost:3000/api/v1/users/');
                const results = await response.json();
                setUser(results.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchUser();
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {user.map((user) => (
                    <li key={user.userID}>  {user.userID} - {user.userName} - {user.userOffice} - Started Working: {user.dateEmployed}</li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;