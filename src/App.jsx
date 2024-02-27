// Code: Main App component
import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

// Add the token prop to the App component
function App() {
  const [token, setToken] = useState(null);  

  // Pass the token and setToken to the Authenticate and SignUpForm components
  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}


export default App;