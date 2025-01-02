import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-10' >
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
      {/* <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex w-full bg-red-200 items-start justify-between'>
          
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Task Tittle</h3>
              <input className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='fger' />
            </div>

            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Date </h3>
              <input className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Assignto</h3>
              <input className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
              <input className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design , dev ,etc' />
            </div>
          </div>

          <div className='w-1/2'>
            <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
            
            <textarea className='text-sm py-1 px-2- w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>

          

        </form>
      </div> */}
    </div>
  )
}

export default Admindashboard
