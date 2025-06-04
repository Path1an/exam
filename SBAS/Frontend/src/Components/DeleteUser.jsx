import{useState} from 'react';

function DeleteUserForm() {
    const [userID, setUserID] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/${userID}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setMessage("user: " + userID + " Deleted successfully!");
            }
            else {
                console.error('Failed to delete user');
            }
        }
        catch (error) {
            console.error(error);
        }

    };

    return (
        <div>
            <h2>Delete User</h2>
            <form onSubmit={handleSubmit}>
                <label> User ID: </label>
                <input type="number" value={userID} onChange={(e) => setUserID(e.target.value)} />
                <button type="submit">Delete User</button>
            </form>
            {Message && <p>{Message}</p>}
        </div>
    );
};

export default DeleteUserForm;