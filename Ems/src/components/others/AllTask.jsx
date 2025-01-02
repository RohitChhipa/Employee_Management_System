import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-80 '>

      <div className='bg-red-400  mt-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto'>
        {authData.employees.map(function (elem , idx) {
          return <div key={idx} className='border-2 border-emerald-400  mt-2 py-2 px-4 flex justify-between rounded'>
            <h2 className=' text-lg font-medium w-1/5 '>{elem.name}</h2>
            <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
            <h5 className=' text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className=' text-lg font-medium w-1/5 text-white-500'>{elem.taskCount.completed}</h5>
            <h5 className=' text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
          </div>
        })}
      </div>

    </div>
  )
}

export default AllTask
