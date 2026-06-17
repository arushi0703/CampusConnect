# Database Design

## Database Name

campusconnect

---

# Users Collection

| Field     | Type     |
| --------- | -------- |
| _id       | ObjectId |
| name      | String   |
| email     | String   |
| password  | String   |
| role      | String   |
| isActive  | Boolean  |
| createdAt | Date     |
| updatedAt | Date     |

---

## Example User Document

```json
{
  "_id":"687123abc",
  "name":"Arushi",
  "email":"arushi@gmail.com",
  "password":"hashed_password",
  "role":"Student",
  "isActive":true
}
```

---

# Tasks Collection

| Field        | Type     |
| ------------ | -------- |
| _id          | ObjectId |
| title        | String   |
| description  | String   |
| status       | String   |
| assignedUser | String   |
| createdAt    | Date     |
| updatedAt    | Date     |

---

## Example Task Document

```json
{
  "_id":"687456xyz",
  "title":"React Project",
  "description":"Complete CampusConnect",
  "status":"Pending",
  "assignedUser":"Arushi"
}
```

---

# Relationship

User

↓

Tasks

One user can have multiple tasks assigned.
