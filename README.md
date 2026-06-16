# CampusConnect - Student Activity Management Portal

## Project Overview

CampusConnect is a MERN Stack web application developed for university student activity management. The system allows students to register, manage tasks, view announcements, access a personalized dashboard, and interact with data stored in MongoDB through REST APIs.

The project was developed as part of the MERN Stack Architecture and Full-Stack Development laboratory exercises.

---

## Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv
* Nodemon

---

## Project Structure

```text
CampusConnect
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## Features

### Student Management

* Student Registration
* Student Profile Update
* View Registered Students
* Delete Student Records
* MongoDB Data Persistence

### Task Management

* Create Tasks
* Update Task Details
* Change Task Status
* Delete Tasks
* Dynamic Task Rendering

### Dashboard

* Display Registered Users
* Display User Registration Details
* Display Tasks
* Real-Time Data Rendering
* Loading and Error States

### User Interface

* Responsive Design
* React Functional Components
* Reusable Components
* Client-Side Routing
* Form Validation
* Success and Error Messages

---

## MERN Architecture

```text
React Frontend
      ↓
Axios HTTP Requests
      ↓
Express REST APIs
      ↓
Mongoose Models
      ↓
MongoDB Database
```

---

## REST API Endpoints

### Student APIs

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| POST   | /students     | Create Student          |
| GET    | /students     | Retrieve All Students   |
| GET    | /students/:id | Retrieve Single Student |
| PUT    | /students/:id | Update Student          |
| DELETE | /students/:id | Delete Student          |

---

### Task APIs

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | /tasks     | Create Task        |
| GET    | /tasks     | Retrieve All Tasks |
| PUT    | /tasks/:id | Update Task        |
| DELETE | /tasks/:id | Delete Task        |

---

## MongoDB Collections

### Users Collection

```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "registrationDate": "Date"
}
```

### Tasks Collection

```json
{
  "title": "String",
  "description": "String",
  "status": "Pending | In Progress | Completed",
  "assignedUser": "String",
  "createdDate": "Date"
}
```

---

## Validation Rules

### User Validation

* Name is required
* Name minimum length: 3 characters
* Name maximum length: 50 characters
* Email is required
* Email must be unique
* Password is required
* Password minimum length: 6 characters

### Task Validation

* Title is required
* Description is required
* Assigned User is required
* Status must be:

  * Pending
  * In Progress
  * Completed

---

## Middleware Implemented

### JSON Middleware

```javascript
app.use(express.json())
```

### CORS Middleware

```javascript
app.use(cors())
```

### Custom Logger Middleware

Logs incoming API requests.

---

## Frontend Pages

### Home

Landing page of CampusConnect.

### Login

Student login interface.

### Register

Student registration form connected to MongoDB.

### Dashboard

Displays:

* Registered students
* User information
* Registration details
* Tasks
* Task status

### Tasks

Allows users to:

* Create Tasks
* Update Task Details

### Profile

Allows users to:

* Update Profile Information

---

## Reusable Components

* Navbar
* Footer
* Layout
* InputField
* CustomButton
* UserCard
* TaskCard
* AnnouncementCard

---

## CRUD Operations Implemented

### User CRUD

* Create User
* Retrieve Users
* Update User
* Delete User

### Task CRUD

* Create Task
* Retrieve Tasks
* Update Task
* Delete Task

---

## Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### MongoDB Configuration

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/campusconnect
```

Ensure MongoDB Compass or MongoDB Community Server is running.

---

## Learning Outcomes

This project demonstrates:

* MERN Stack Architecture
* React Functional Components
* React State Management
* React Router Navigation
* REST API Development
* Express Middleware
* MongoDB Integration
* Mongoose Models and Validation
* CRUD Operations
* Axios API Communication
* Full-Stack Application Development

---

## Author

**Arushi**

B.Tech Computer Science Engineering

Academic Project – CampusConnect
