import React from 'react'
import img1 from '../assets/wallpaperflare.com_wallpaper (16).jpg'
import img2 from '../assets/wallpaperflare.com_wallpaper (17).jpg'
import img3 from '../assets/wallpaperflare.com_wallpaper (18).jpg'
import img4 from '../assets/wallpaperflare.com_wallpaper (19).jpg'
import Login from './login'

export default function Landing() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden relative'>
      <img src={img4} alt="" className='aspect-[1/2]  md:aspect-video [w-100vw] ' />
      <div className='absolute inset-0  flex items-center justify-center'>
        <Login/>
      </div>


    </div>
  )
}
