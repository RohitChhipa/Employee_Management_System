import React, { useState } from 'react'
import NewTask from '../Tasklist/NewTask'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskdescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')

  // const [newTask, setNewTask] = useState({})
  // const submithandler = (e) => {
  //   e.preventDefault()
  //   // console.log(taskTitle, taskDescription, taskDate, assignto, category)
  //   setNewTask({ taskTitle, taskDescription, taskDate, category, failed: false, active: false, NewTask: true, completed: false })
  //   const data = JSON.parse(localStorage.getItem('employees'))
  //   data.forEach(function (elem) {
  //     if (assignto == elem.name) {
  //       elem.tasks.push(newTask)
  //       console.log(elem)
  //     }
  //   })
  //   setTaskDate("")
  //   setAssignto('')
  //   setCategory('')
  //   setTaskdescription('')
  //   setTaskTitle('')
  // }

  const submithandler = (e) => {
    e.preventDefault();
  
    // Create a new task object
    const taskToAdd = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      failed: false,
      active: false,
      NewTask: true,
      completed: false,
    };
  
    // Retrieve employees from localStorage
    const storedData = localStorage.getItem('employees');
    if (!storedData) {
      console.error("No employee data found in localStorage.");
      return;
    }
  
    const data = JSON.parse(storedData);
  
    // Add the new task to the appropriate employee
    data.forEach((elem) => {
      if (assignto === elem.name) {
        if (!Array.isArray(elem.tasks)) {
          elem.tasks = []; // Ensure tasks is an array
        }
        elem.tasks.push(taskToAdd);
        console.log("Updated employee:", elem);
      }
    });
  
    // Save the updated employees back to localStorage
    localStorage.setItem('employees', JSON.stringify(data));
  
    // Reset the form fields
    setTaskDate("");
    setAssignto("");
    setCategory("");
    setTaskdescription("");
    setTaskTitle("");
  };
  


// const  CreateTask  = () => {
//   const [employees, setEmployees] = useState([]);
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskdescription] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   const [assignto, setAssignto] = useState("");
//   const [category, setCategory] = useState("");

//   // Load employees from localStorage on component mount
//   useEffect(() => {
//     const storedData = localStorage.getItem("employees");
//     if (storedData) {
//       setEmployees(JSON.parse(storedData));
//     }
//   }, []);

//   const submithandler = (e) => {
//     e.preventDefault();

//     // Create a new task object
//     const taskToAdd = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       failed: false,
//       active: false,
//       NewTask: true,
//       completed: false,
//     };

//     // Update the employees state and localStorage
//     const updatedEmployees = employees.map((elem) => {
//       if (assignto === elem.name) {
//         return {
//           ...elem,
//           tasks: [...(elem.tasks || []), taskToAdd], // Add the new task
//         };
//       }
//       return elem;
//     });

//     // Update state and localStorage
//     setEmployees(updatedEmployees);
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));

//     // Reset form fields
//     setTaskTitle("");
//     setTaskdescription("");
//     setTaskDate("");
//     setAssignto("");
//     setCategory("");
//   };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
      <form onSubmit={(e) => {
        submithandler(e)
      }}
        className='flex w-full bg-[#1c1c1c]-200 items-start justify-between'>

        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Task Tittle</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value)
              }}
              className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='fger' />
          </div>

          <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Date </h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value)
              }} className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
          </div>
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Assignto</h3>
            <input
              value={assignto}
              onChange={(e) => {
                setAssignto(e.target.value)
              }} className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
          </div>
          <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }} className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design , dev ,etc' />
          </div>
        </div>

        <div className='w-1/2'>
          <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskdescription(e.target.value)
            }} className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>



      </form>
    </div>
  )
}

export default CreateTask
