// import React , { createContext } from 'react'

// export const AuthContext = createContext()
// const Authprovider = ({children}) => {
//   return (
//     <div>
//         <AuthContext.provider value={"rohit"}>
//         {children}
//         </AuthContext.provider>
//     </div>
//   )
// }

// export default Authprovider

// import React, { createContext, useEffect, useState } from 'react';
// import { getLocalStorage } from '../utils/localstorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

//   const [userData, setUserData] = useState(null)

//   // const data = getLocalStorage()
//   // console.log(data.employees)

//   useEffect(() => {
//     const { employees, admin } = getLocalStorage()
//     setUserData({ employees, admin })
//   } , [])

//   return (
//     <div>
//       <AuthContext.Provider value={"userData"}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   );
// };

// export default AuthProvider;


import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [authData, setAuthData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    setLocalStorage()
    const data = getLocalStorage()
    console.log("Auth Data Loaded:", data);
    setAuthData(data);
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
