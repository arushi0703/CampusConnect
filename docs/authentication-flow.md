# Authentication Flow

## Registration Flow

User

↓

Fill Registration Form

↓

Validate Data

↓

Check Duplicate Email

↓

Hash Password Using bcrypt

↓

Store User In MongoDB

---

## Login Flow

User

↓

Enter Email And Password

↓

Verify User Exists

↓

Compare Password Using bcrypt.compare()

↓

Generate JWT Token

↓

Return Token To Client

↓

Store Token In localStorage

---

## Protected Route Flow

React Request

↓

Authorization Header

↓

Auth Middleware

↓

JWT Verification

↓

Access Granted / Access Denied

---

## Logout Flow

User Clicks Logout

↓

Remove JWT Token

↓

Redirect To Login Page

↓

Protected Pages Become Inaccessible

---

## Security Features

* Password Hashing
* JWT Authentication
* Protected APIs
* Authorization Middleware
* Role-Based Access Preparation
