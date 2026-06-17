# API Documentation

## Base URL

http://localhost:5000

---

# Student APIs

## Register User

POST /students

### Request Body

```json
{
  "name":"Arushi",
  "email":"arushi@gmail.com",
  "password":"123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Registration Successful"
}
```

---

## Login User

POST /students/login

### Request Body

```json
{
  "email":"arushi@gmail.com",
  "password":"123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login Successful",
  "token":"JWT_TOKEN"
}
```

---

## Get All Users

GET /students

Authorization Required

---

## Get User By ID

GET /students/:id

Authorization Required

---

## Update User

PUT /students/:id

Authorization Required

---

## Delete User

DELETE /students/:id

Authorization Required

---

# Task APIs

## Create Task

POST /tasks

Authorization Required

---

## Get All Tasks

GET /tasks

Authorization Required

---

## Update Task

PUT /tasks/:id

Authorization Required

---

## Delete Task

DELETE /tasks/:id

Authorization Required

---

# Common Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |
