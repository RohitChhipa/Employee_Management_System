import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
      <div className='rounded-xl w[55%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold' >{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w[55%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold' >{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Complete Task</h3>
      </div>
      <div className='rounded-xl w[55%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold' >{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accept Task</h3>
      </div>
      <div className='rounded-xl w[55%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold' >{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskNumbers