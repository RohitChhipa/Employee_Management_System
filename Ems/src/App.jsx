// import React, { useContext, useEffect } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/Dashboard/employeeDashboard'
// import Admindashboard from './components/Dashboard/Admindashboard'
// import { setLocalStorage } from './utils/localstorage'
// import { useState } from 'react'
// import { AuthContext } from './context/Authprovider'
// const App = () => {

//   // useEffect(() =>{
//   //   setLocalStorage()

//   // }, )
//   const [user, setUser] = useState(null)
//   const handleLogin = (email, password) => {
//     console.log(email, password)
//     if (email == 'admin@me.com' && password == '123') {

//       setUser('admin')

//     }
//     else if (email == 'user@me.com' && password == '123') {

//       setUser('employee')

//     }
//     else {
//       alert("Invalid credentials")
//     }
//   }

//   const data = useContext(AuthContext)
//   console.log(data)

//   // handleLogin('admin@me.com' , 123)
//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ' '}
//       {user == 'admin' ? <Admindashboard /> : <EmployeeDashboard />}
//       {/* <EmployeeDashboard /> */}
//       {/* <Admindashboard /> */}

//     </>
//   )
// }

// export default App


// import React, { useContext, useEffect, useState } from 'react';
// import Login from './components/Auth/Login';
// import EmployeeDashboard from './components/Dashboard/employeeDashboard';
// import Admindashboard from './components/Dashboard/Admindashboard';
// import { AuthContext } from './context/Authprovider';

// const App = () => {
//   const [user, setUser] = useState(null)
//   const Authdata = useContext(AuthContext)


//   const handleLogin = (email, password) => {
//     console.log(email, password)
//     if (email === 'admin@me.com' && password === '123') {
//       setUser('admin')
//     } else if (Authdata && Authdata.employees.find((e) => email == e.email && password == e.password)) {
//       setUser('employee')
//     } else {
//       alert('Invalid credentials')
//     }
//   };



//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === 'admin' ? (
//         <Admindashboard />
//       ) : (
//         <EmployeeDashboard />
//       )}
//     </>
//   );
// };

// export default App;



import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
import Admindashboard from "./components/Dashboard/Admindashboard";
import { AuthContext } from "./context/Authprovider";

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  useEffect(() =>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  // useEffect(() =>{
  //   if(Authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[Authdata]);


  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password)

    // Admin login
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      console.log("Admin logged in");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return;
    }

    // Employee login
    else if (Authdata
      // Authdata &&
      // Authdata.employees &&
      // Authdata.employees.some(
      //   (e) => e.email === email && e.password === password
      // )
    ) {
      const employee = Authdata.employees.find((e) => email == e.email && e.password == password)
      if (employee)
        setUser("employee");
      console.log("Employee logged in");
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data :employee }))
      return;
    }

    // Invalid credentials
    alert("Invalid credentials");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <Admindashboard changeUser={setUser}/>
      ) : user === "employee" ? (
        <EmployeeDashboard  changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

  export default App;
