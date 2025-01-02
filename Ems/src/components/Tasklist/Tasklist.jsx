import React from 'react'
import Accepttask from './Accepttask'
import NewTask from './NewTask'
import Failedtask from './Failedtask'
import Completetas from './Completetas'

const Tasklist = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10 ' >
      {/* <Accepttask />
      <NewTask />
      <Failedtask />
      <Completetas /> */}
      {data.tasks.map((elem , idx) => {
        
        if(elem.active){
          return <Accepttask  key ={idx}  data = {elem}/>
        }
        if(elem.NewTask){
          return <Accepttask  key ={idx} data = {elem}/>
        }
        if(elem.failed){
          return <Failedtask  key ={idx} data = {elem}/>
        }
        if(elem.completed){
          return <Completetas  key ={idx} data = {elem}/>
        }
      })}


    </div>
  )
}

export default Tasklist
