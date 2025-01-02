const employees = [
    {
        id: 1,
        name: "Rohit Kumar",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Prepare Monthly Report",
                taskDescription: "Compile and submit the monthly performance report.",
                category: "Reporting",
                taskDate: "2024-12-25",
            },
            {
                active: false,
                completed: true,
                newTask: false,
                failed: false,
                taskTitle: "Team Meeting",
                taskDescription: "Attend the scheduled team meeting on project updates.",
                category: "Meeting",
                taskDate: "2024-12-20",
            },
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review the latest codebase changes.",
                category: "Development",
                taskDate: "2024-12-23",
            },
        ],
        taskCount: { active: 2, completed: 1, newTask: 2, failed: 0 },
    },
    {
        id: 2,
        name: "Mohit",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Customer Feedback Analysis",
                taskDescription: "Analyze the latest customer feedback survey results.",
                category: "Analysis",
                taskDate: "2024-12-26",
            },
            {
                active: false,
                completed: true,
                newTask: false,
                failed: false,
                taskTitle: "Product Presentation",
                taskDescription: "Prepare and deliver the product presentation to stakeholders.",
                category: "Presentation",
                taskDate: "2024-12-18",
            },
            {
                active: false,
                completed: false,
                newTask: false,
                failed: true,
                taskTitle: "Bug Fixing",
                taskDescription: "Resolve critical bugs reported in the system.",
                category: "Development",
                taskDate: "2024-12-21",
            },
        ],
        taskCount: { active: 1, completed: 1, newTask: 1, failed: 1 },
    },
    {
        id: 3,
        name: "Nitin Chhipa",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Database Backup",
                taskDescription: "Perform a full database backup.",
                category: "Maintenance",
                taskDate: "2024-12-24",
            },
            {
                active: false,
                completed: true,
                newTask: false,
                failed: false,
                taskTitle: "Training Session",
                taskDescription: "Conduct a training session on the new software update.",
                category: "Training",
                taskDate: "2024-12-15",
            },
        ],
        taskCount: { active: 1, completed: 1, newTask: 1, failed: 0 },
    },
    {
        id: 4,
        name: "Jinal Chhipa",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Inventory Check",
                taskDescription: "Verify the inventory and update the stock records.",
                category: "Logistics",
                taskDate: "2024-12-22",
            },
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Email Campaign",
                taskDescription: "Prepare and launch the email campaign for the holiday sale.",
                category: "Marketing",
                taskDate: "2024-12-27",
            },
        ],
        taskCount: { active: 2, completed: 0, newTask: 2, failed: 0 },
    },
    {
        id: 5,
        name: "Arjun Verma",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                completed: false,
                newTask: true,
                failed: false,
                taskTitle: "Server Upgrade",
                taskDescription: "Upgrade the server hardware and software configurations.",
                category: "IT",
                taskDate: "2024-12-28",
            },
            {
                active: false,
                completed: true,
                newTask: false,
                failed: false,
                taskTitle: "Policy Update",
                taskDescription: "Review and update company policies for the new fiscal year.",
                category: "Administration",
                taskDate: "2024-12-19",
            },
            {
                active: false,
                completed: false,
                newTask: false,
                failed: true,
                taskTitle: "Customer Onboarding",
                taskDescription: "Assist new customers in onboarding with the system.",
                category: "Support",
                taskDate: "2024-12-18",
            },
        ],
        taskCount: { active: 1, completed: 1, newTask: 1, failed: 1 },
    },
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees ) )
    localStorage.setItem('admin', JSON.stringify(admin ) )
}
export const getLocalStorage = () =>{
    const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))
   
    return {employees , admin}
}