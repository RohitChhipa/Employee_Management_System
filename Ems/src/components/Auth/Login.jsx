import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    console.log("email is", email)
    console.log("password is", password)

    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }

          }
          className='flex flex-col items-center justify-center'>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter Your Email :' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-grey-400' type="password" placeholder='Enter Password :' />
          <button className='text-white outline-none  border-none outline-none hover:bg-emerald-700 font-semiblod bg-emerald-600 text-lg py-2 px-8 w-full rounded-full mt-7 placeholder:text-white'>Log-in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
