import{useState} from 'react';

function EditUserForm() {
    const [userID, setUserID] = useState('');
    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [date, setDate] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/${userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName: name, userOffice: office, dateEmployed: date})
            });

            if (response.ok) {
                const result = await response.json();
                setMessage("User: " + name + " Updated successfully!");
            }
            else {
                console.error('Failed to update user');
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label> User ID: </label>
                    <input type="number" value={userID} onChange={(e) => setUserID(e.target.value)} />
                <label> Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label> Office: </label>
                    <input type="text" value={office} onChange={(e) => setOffice(e.target.value)} />
                <label> Date Employed: </label>
                    <input type="number" value={date} onChange={(e) => setDate(e.target.value)} /> 

                <button type="submit">Update User</button>
            </form>
            {Message && <p>{Message}</p>}
        </div>
    );
};

export default EditUserForm;