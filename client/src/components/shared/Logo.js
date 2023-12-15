import React from 'react'
import logo from '../../assets/logo.jpg'

const Logo = () => {
  return (
    <div className="flex top-2 right-2 items-center gap-2 text-xl text-clr w-full justify-end pr-10 mt-2">
      Pulse
      <img src={logo} className="w-10 h-10 object-cover" alt="logo" />
  </div>
  )
}

export default Logo
