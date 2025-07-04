# Contact Manager MERN

A full-stack contact management application built using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete contacts
- Responsive UI with React
- RESTful API with Express and Node.js
- MongoDB database for storing users and contacts

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Santhoji07/Contact-Manager-MERN.git
   cd Contact-Manager-MERN
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the `backend` directory based on `.env.example`.
   - Add your MongoDB URI and JWT secret.

5. **Run the backend server:**
   ```bash
   cd backend
   npm start
   ```

6. **Run the frontend development server:**
   ```bash
   cd frontend
   npm start
   ```

## Project Structure

```
Contact-Manager-MERN/
  backend/    # Express API and models
  frontend/   # React client application
```

## API Endpoints

- `/api/auth` – Authentication routes
- `/api/contacts` – CRUD operations for contacts

## License

MIT

---

Feel free to customize this README for your project's specific features and instructions!
