// src/components/SignUpForm.jsx
import { useState } from 'react'

// Define a component that will be used in the App component
export default function SignUpForm() {
    
    // Define state variables for the username, password, and password confirmation
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('htt[https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

                const result = await response.json();
                console.log(result);
                } catch (error) {
                    setError(error.message);
                }
    }


    // Return a form with a username and password input
    return (    
    
    <>
    <h2>Sign Up!</h2>
    {/* Display the error message if there is one */}
    {error && <p>{error}</p>}

    {/* Create a form with a username and password input */}
    <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <p style={{color: 'red'}}>{error}</p>
    </form>
    </>
    )
}
