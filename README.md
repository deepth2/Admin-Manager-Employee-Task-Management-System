# Admin-Manager-Employee-Task-Management-System
A full‑stack Task Management Web Application designed to model real‑world organizational workflows. The system enables Admins to manage users and projects, Managers to delegate and track tasks, and Employees to view and update their assigned work.
This project is built using **React.js** for the frontend and **Node.js + Express.js** for the backend, following **enterprise-grade system design principles** such as Role-Based Access Control (RBAC), modular architecture, and scalable data handling.
## Key Features

### 1. Role-Based Access Control (RBAC)
- Supports **Admin**, **Manager**, and **Employee** roles
- Restricts access to routes, UI components, and APIs based on role
- Implemented using JWT authentication and backend middleware

### 2. Project-Wise Task Segmentation
- Tasks are grouped under projects
- Ensures clear ownership and responsibility
- Simplifies project-level progress tracking

### 3. Task Priority & Deadline Management
- Priority levels: **High**, **Medium**, **Low**
- Deadline assignment and overdue tracking
- Helps teams focus on critical tasks

### 4. Task Status Workflow
Standardized task lifecycle: - Backend-enforced transitions
- Prevents invalid or false updates

### 5. Employee Dashboard (Personalized View)
- Employees can view only their assigned tasks
- Displays task status, deadlines, and priorities
- Prevents data leakage and improves usability

### 6. Manager Task Delegation
- Managers can assign tasks within their projects
- Reduces Admin workload
- Reflects real organizational hierarchy

### 7. Task Comments & Activity Log
- Commenting on tasks for better communication
- Maintains task history for transparency and audits
### 8 . Mobile-Responsive Design
- Optimized for desktop, tablet, and mobile devices
- Improves accessibility and engagement
  
##  Technology Stack

### Frontend
- React.js
- React Router
- Axios / Fetch API
- UI Library (MUI / Ant Design / ShadCN)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
