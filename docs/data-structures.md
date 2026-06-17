# Data Structures

## User Entity

```typescript
interface User {

    _id:string

    name:string

    email:string

    password:string

    role:"Student" | "Faculty" | "Admin"

    isActive:boolean

    createdAt:string

    updatedAt:string

}
```

---

## Task Entity

```typescript
interface Task {

    _id:string

    title:string

    description:string

    status:
    | "Pending"
    | "In Progress"
    | "Completed"

    assignedUser:string

    createdAt:string

    updatedAt:string

}
```

---

## Benefits

* Standardized Data Structures
* Easier Team Collaboration
* Better Maintainability
* Easier Future TypeScript Migration
* Improved Code Consistency
