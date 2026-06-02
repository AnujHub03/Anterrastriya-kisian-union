import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  // Simple state to track theme toggle
  const [theme, setTheme] = useState('light')

  // Toggle theme handler
  const handleThemeToggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  const navLinks = (
    <>
      <li><Link to="/" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">Home</Link></li>
      <li><Link to="/team" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">Team & Leadership</Link></li>
      <li><Link to="/membership" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">Membership</Link></li>
      <li><Link to="/activities" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">Activities & Events</Link></li>
      <li><Link to="/about" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">About</Link></li>
      <li><Link to="/contact" className="hover:text-amber-400 focus:text-amber-400 font-medium transition-colors">Contact</Link></li>
    </>
  )

  return (
    <div className="navbar bg-green-800 text-white shadow-md px-4 sm:px-6 lg:px-8">
      {/* 1. LEFT SIDE: Brand & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 pr-2 hover:bg-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Mobile Dropdown Options */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 rounded-box w-56 gap-1 border border-green-700 text-white">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-amber-400 tracking-wide normal-case p-0 hover:bg-transparent">
          Kisan Union
        </a>
      </div>

      {/* 2. CENTER: Main Navigation Links (Hidden on Mobile/Tablet, Centered on Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      {/* 3. RIGHT SIDE: Theme Controller & Login Button */}
      <div className="navbar-end gap-3">
        {/* Light / Dark Theme Controller (daisyUI Swap Component) */}
        <label className="btn btn-ghost btn-circle swap swap-rotate text-amber-400 hover:bg-green-700">
          <input type="checkbox" onChange={handleThemeToggle} checked={theme === 'dark'} />
          
          {/* Sun Icon (shows when theme is dark, click to go light) */}
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.36Zm12,.72a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41l-.71.71a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.77ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,18.36,17ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Z"/>
          </svg>
          
          {/* Moon Icon (shows when theme is light, click to go dark) */}
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/>
          </svg>
        </label>

        {/* Login Button */}
        <button className="btn bg-amber-500 hover:bg-amber-600 border-none text-stone-900 font-bold px-5 btn-sm sm:btn-md rounded-lg shadow transition-all transform active:scale-95">
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar