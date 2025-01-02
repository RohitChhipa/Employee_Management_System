// import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage'

// const Header = (props) => {

//   // const [username , setUsername] =useState('')
//   // if(!data){setUsername('admin')}
//   // else{setUsername(data.name)}
//   const logOutUser =() =>{
//    localStorage.setItem('loggedInUser','')
//    props.changeUser('')
//   //  window.location.reload()
//   }
//   return (
//     <div className='flex item-end justify-between'>
//       <h1 className='text-2xl font-medium'>Hello <br />  <span className='text-3xl font-semibold'>username👋 </span></h1>
//       <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-medium'>Log out</button>
//     </div>
//   )
// }

// export default Header




// ######## 2ND WAY   ********** 
// import React, { useState, useEffect } from 'react'

// const Header = (props) => {
//   const [username, setUsername] = useState('')

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if (loggedInUser) {
//       const user = JSON.parse(loggedInUser) // Assuming it's stored as a stringified object
//       setUsername(user.name || 'Guest')  // Update username or set a default if not available
//     } else {
//       setUsername('Guest')  // Default username if no user is logged in
//     }
//   }, [props]) // Re-run this whenever props change, to handle dynamic user changes

//   const logOutUser = () => {
//     localStorage.setItem('loggedInUser', '')  // Clear user from localStorage
//     setUsername('Guest')  // Reset username to default
//     props.changeUser('')  // Inform parent component about logout
//     // window.location.reload()  // Optionally reload to reset app state
//   }

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         Hello <br />
//         <span className='text-3xl font-semibold'>{username}👋</span>
//       </h1>
//       <button
//         onClick={logOutUser}
//         className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-medium'
//       >
//         Log out
//       </button>
//     </div>
//   )
// }

// export default Header



//######### 3RD WAY ***********


import React, { useState, useEffect } from 'react'
import { getLocalStorage } from '../../utils/localStorage'
const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Fetch the logged-in user from localStorage
    const storedUser = localStorage.getItem('loggedInUser')
    // console.log("this is my user"+storedUser);

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        // Access 'data.name' from the parsed object
        setUsername(user.data?.name || 'Guest')
      } catch (error) {
        console.error('Error parsing loggedInUser data:', error)
        setUsername('Guest') // Fallback in case of error
      }
    }
  }, [])  // Empty array ensures it runs only on mount

  const logOutUser = () => {
    // Clear the logged-in user from localStorage
    localStorage.setItem('loggedInUser', '')

    // Reset username to 'Guest' or empty
    setUsername('Guest')

    // Inform the parent component about the logout
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-medium'
      >
        Log out
      </button>
    </div>
  )
}

export default Header
