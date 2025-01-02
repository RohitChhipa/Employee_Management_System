import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      <h1>{props.id}</h1>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskNumbers data = {props.data} />
      <Tasklist data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard
