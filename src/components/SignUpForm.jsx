// src/components/SignUpForm.jsx
import React, { useState } from 'react';

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();


        // Form validation for username
        if (username.length < 8) {
            setError('Username must be at least 8 characters long.');
            return;
        
        }

        // Form validation for password
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // If the response is not ok, throw an error
            const result = await response.json();
            if (result.token) {
                setToken(result.token);
            } else {
                throw new Error(result.message || 'Signup failed');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    // Ensure this return statement is inside the component function
    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p style={{color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
