# Role Based Access Control (RBAC)

## Roles

### Student

Permissions:

* Register
* Login
* View Dashboard
* Manage Own Tasks
* Update Profile

---

### Faculty

Permissions:

* Login
* View Students
* View Tasks
* Manage Assigned Tasks

---

### Administrator

Permissions:

* Manage Users
* Manage Tasks
* Manage Roles
* View Entire System

---

# Permission Matrix

| Feature      | Student | Faculty  | Admin |
| ------------ | ------- | -------- | ----- |
| Register     | Yes     | No       | No    |
| Login        | Yes     | Yes      | Yes   |
| Dashboard    | Yes     | Yes      | Yes   |
| Create Task  | Yes     | Yes      | Yes   |
| Update Task  | Own     | Assigned | All   |
| Delete Task  | Own     | Assigned | All   |
| View Users   | Limited | Yes      | Yes   |
| Delete Users | No      | No       | Yes   |
| Manage Roles | No      | No       | Yes   |

---

## Future Enhancements

* Admin Dashboard
* Faculty Dashboard
* Dynamic Navbar Based On Roles
* Fine-Grained Permissions
