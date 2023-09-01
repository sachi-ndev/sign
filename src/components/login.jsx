import React from 'react'
// import {BrowserRouter, Route } from 'react-router-dom'
import Signu from './signup'


export default function Login() {
  return (
    <div className='w-[60vw] h-[75vh] bg-transparent relative flex flex-col  md:flex-row shadow-2xl shadow-[#000000d2] rounded-xl overflow-hidden p-2  '>
        <div className=' w-[30vw]  bg-transparent flex flex-col items-center justify-center'>

        <h1 className='w-[20rem] bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 text-[3.6rem] font-dance'>Welcome to Saheerzon.com</h1>

        </div>

        <div className=' w-[30vw]  bg-white rounded-br-md rounded-tr-md'>
            <Signu/>
        </div>
    </div>
  )
}
