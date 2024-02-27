// src/components/Authenticate.jsx
import React, { useState } from 'react';

// Add the token prop to the function signature
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    // Add the token to the handleClick function signature
    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            // If the response is not ok, throw an error
            const result = await response.json();
            if (result.success) {
                setSuccessMessage(result.message);
                setUsername(result.data.username);

            } else {
                throw new Error(result.message || 'Authentication failed');
            }
        } catch (error) {
            setError(error.message);
        }
    }
    // Ensure this return statement is inside the component function
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        successMessage: {
            color: 'green',
        },
        errorMessage: {
            color: 'red',
        },
    };
    // Add the button to the return statement
    return (
        <div style={styles.container}>
            <h2>Authenticate</h2>
            {successMessage && ( 
            <> 
            <p style={styles.successMessage}>{successMessage}</p>
            <p>Username: {username}</p>
            </>
            )}
            {error && <p style={styles.errorMessage}>{error}</p>}             
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}
