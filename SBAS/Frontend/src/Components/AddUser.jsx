import {useState} from 'react'

function AddUserForm() {
    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [date, setDate] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: name, userOffice: office, dateEmployed: date })
            });

            if (response.ok) {
                const result = await response.json();
                setMessage("User:" + name + "added successfully!");
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <label htmlFor="user-name">Name:</label>
            <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="user-office">Office:</label>
            <input
                id="user-office"
                type="text"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
            />
            <label htmlFor="date-employed">Date Employed:</label>
            <input
                id="date-employed"
                type="number"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Add User</button>
            {Message && <p>{Message}</p>}
        </form>
    );
}

export default AddUserForm;