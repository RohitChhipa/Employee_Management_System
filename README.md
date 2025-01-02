# Employee Management System (EMS)

This project is an Employee Management System (EMS) built with React and Vite. It allows administrators to manage tasks assigned to employees and provides a dashboard for both administrators and employees to view and manage tasks.

## Project Structure
```
Ems/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── Admindashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── others/
│   │   │   ├── AllTask.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── TaskNumbers.jsx
│   │   ├── Tasklist/
│   │   │   ├── Accepttask.jsx
│   │   │   ├── Completetas.jsx
│   │   │   ├── Failedtask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── Tasklist.jsx
│   ├── context/
│   │   └── Authprovider.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   ├── utils/
│   │   ├── employees.json
│   │   └── localstorage.jsx
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ems.git
   cd ems
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Details

### Components

#### Auth
- **Login.jsx:** Handles user login functionality by validating user credentials and redirecting to the appropriate dashboard (Admin or Employee) upon successful login. Includes error handling for invalid login attempts.

#### Dashboard
- **Admindashboard.jsx:** Displays an overview of all tasks and their statuses for the admin. Allows the admin to create, update, and delete tasks as well as view task statistics.
- **EmployeeDashboard.jsx:** Provides employees with a personalized view of tasks assigned to them. Employees can update task statuses, such as marking tasks as completed or failed.

#### Others
- **AllTask.jsx:** Displays a comprehensive list of all tasks in the system, with filtering and sorting options for admins to manage tasks efficiently.
- **CreateTask.jsx:** Contains a form for admins to create new tasks. Includes fields for task title, description, category, and due date.
- **Header.jsx:** A reusable header component with a welcome message displaying the user's name and a logout button to clear session data.
- **TaskNumbers.jsx:** Displays statistical information such as the total number of tasks, completed tasks, pending tasks, and failed tasks. Useful for quick insights.

#### Tasklist
- **Accepttask.jsx:** Displays tasks that have been accepted by employees but not yet completed. Provides options for employees to mark them as completed or failed.
- **Completetas.jsx:** Lists all tasks that have been successfully completed. Useful for tracking employee performance.
- **Failedtask.jsx:** Lists tasks that were marked as failed. Includes options for admins to reassign or modify these tasks.
- **NewTask.jsx:** Displays tasks that are newly assigned to employees and awaiting acceptance.
- **Tasklist.jsx:** Acts as the main task management component, integrating all task-related actions like viewing, filtering, and updating task statuses.

### Context
- **Authprovider.jsx:** Provides authentication context to manage user login state throughout the application. Ensures secure access to dashboards and task management features.

### Utilities
- **localstorage.jsx:** Handles local storage operations for saving and retrieving user and task data. Simplifies data persistence across sessions.
- **employees.json:** Contains sample employee data for testing and demonstration purposes.

### Styles
- **App.css:** Defines global styles and component-specific CSS for consistent design across the application.
- **index.css:** Tailwind CSS configuration for utility-first styling.

### Configuration
- **eslint.config.js:** ESLint configuration to enforce coding standards and ensure code quality.
- **postcss.config.js:** Configuration for PostCSS to process and optimize CSS.
- **tailwind.config.js:** Tailwind CSS configuration for custom theming and extending default styles.
- **vite.config.js:** Vite configuration for bundling and optimizing the development workflow.

## License
This project is licensed under the MIT License.

