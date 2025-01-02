# Employee Management System (EMS)

This project is an Employee Management System (EMS) built with React and Vite. It allows administrators to manage tasks assigned to employees and provides a dashboard for both administrators and employees to view and manage tasks.

## Project Structure
Ems/ ├── .gitignore ├── eslint.config.js ├── index.html ├── package.json ├── postcss.config.js ├── public/ ├── README.md ├── src/ │ ├── App.css │ ├── App.jsx │ ├── assets/ │ ├── components/ │ │ ├── Auth/ │ │ │ └── Login.jsx │ │ ├── Dashboard/ │ │ │ ├── Admindashboard.jsx │ │ │ └── EmployeeDashboard.jsx │ │ ├── others/ │ │ │ ├── AllTask.jsx │ │ │ ├── CreateTask.jsx │ │ │ ├── Header.jsx │ │ │ ├── TaskNumbers.jsx │ │ ├── Tasklist/ │ │ ├── Accepttask.jsx │ │ ├── Completetas.jsx │ │ ├── Failedtask.jsx │ │ ├── NewTask.jsx │ │ └── Tasklist.jsx │ ├── context/ │ │ └── Authprovider.jsx │ ├── index.css │ ├── main.jsx │ ├── pages/ │ ├── utils/ │ │ ├── employees.json │ │ └── localstorage.jsx ├── tailwind.config.js └── vite.config.js 

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ems.git
   cd ems
   Project Details
Components
Auth
Login.jsx: Handles user login functionality.
Dashboard
Admindashboard.jsx: Admin dashboard to manage tasks.
EmployeeDashboard.jsx: Employee dashboard to view and manage their tasks.
Others
AllTask.jsx: Displays all tasks for the admin.
CreateTask.jsx: Form to create new tasks.
Header.jsx: Header component with logout functionality.
TaskNumbers.jsx: Displays task statistics.
Tasklist
Accepttask.jsx: Displays accepted tasks.
Completetas.jsx: Displays completed tasks.
Failedtask.jsx: Displays failed tasks.
NewTask.jsx: Displays new tasks.
Tasklist.jsx: Main task list component.
Context
Authprovider.jsx: Provides authentication context for the application.
Utilities
localstorage.jsx: Handles local storage operations for employees and admin data.
Styles
App.css: Main CSS file for the application.
index.css: Tailwind CSS configuration.
Configuration
eslint.config.js: ESLint configuration.
postcss.config.js: PostCSS configuration.
tailwind.config.js: Tailwind CSS configuration.
vite.config.js: Vite configuration.
License
This project is licensed under the MIT License. ```
