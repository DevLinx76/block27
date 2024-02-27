# React Forms Workshop with Vite

This project demonstrates the implementation of controlled React forms, leveraging Vite for development efficiency. It interacts with an external API for user signup and authentication, providing a practical example of real-world application features.

## Overview

This application demonstrates the creation of controlled React forms, interfacing with an external API for user signup and authentication processes.


## Features

- **User Signup**: Captures username and password for account creation via the `/signup` API endpoint.
- **User Authentication**: Validates sessions with tokens obtained post-signup through the `/authenticate` endpoint.
- **Form Validation**: Ensures usernames meet minimum character requirements.
- **Error Feedback**: Offers informative messages during signup or authentication failures.
- **Styling**: Applies CSS for an enhanced user interface.

## Project Structure

- `App.jsx`: Orchestrates the application, managing state and coordinating the interaction between the signup and authentication components.
- `SignUpForm.jsx`: Handles the user registration process, including input validation and API communication.
- `Authenticate.jsx`: Manages user authentication, displaying relevant messages and user information upon successful verification.


## Getting Started

1. **Setup the Project**:
    ```sh
    git clone <repository-url>  # Clone the project
    cd <project-directory>      # Navigate to the project directory
    npm install                 # Install dependencies
    ```

2. **Run the Development Server**:
    ```sh
    npm run dev  # Start the server
    ```
    Open `http://localhost:3000` in a browser to view the application.

## API Interaction

Interacts with the FSA API at `https://fsa-starter-api.herokuapp.com`, using endpoints `/signup` and `/authenticate` for demonstrating signup and authentication processes.

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html): For understanding React concepts.
- [Vite Documentation](https://vitejs.dev/guide/): To learn more about Vite's features and advantages.
- [FSA API Documentation](https://fsa-starter-api.herokuapp.com/documentation): Detailed API endpoints and functionality.

## Contributions

We welcome contributions, bug reports, and feature requests to enhance the project. Please refer to our contributing guidelines for more information.
