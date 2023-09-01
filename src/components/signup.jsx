import React from 'react'
import { DeviceMobile, EnvelopeSimple, Key, UserCircle } from '@phosphor-icons/react'

export default function Signu() {
  return (
    <div className='h-[75vh] flex flex-col items-center justify-center'>
    <div >
    <label htmlFor="fullname">Full name</label>
    {/* <p>fullname</p> */}
    <br />
    <div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem] mb-2'>
    <UserCircle size={32} className='m-2 ' />
    <input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="text" placeholder='Enter your name' />
    </div>

    <label htmlFor="mob">Mobile Number</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem] mb-2'>
    <DeviceMobile size={32} className='m-2 ' />
    <input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="number" placeholder='Enter your Phone no' />
    </div>


    <label htmlFor="email" >Email</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem]  mb-2'>
    <EnvelopeSimple size={32} className='m-2 ' />
    <input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="email" placeholder='Enter your mail ID' />
    </div>


    <label htmlFor="pass" >Password</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem]  mb-2'>
    <Key size={32} className='m-2 ' />
    <input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="password" placeholder='Enter your Password' />
    </div>

    <label htmlFor="repass" >Confirm Password</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem]  mb-2'>
    <Key size={32} className='m-2 ' />
    <input className='bg-transparent w-[16rem] overflow-hidden  outline-none' type="password" placeholder='Enter your Password' />
    </div>


    </div>

    <button className='bg-[rgb(251,168,141)] text-lg px-4 py-2 rounded-lg mt-4'>Register</button>
        
    </div>
  )
}
