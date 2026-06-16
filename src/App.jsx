import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Issues from './Pages/Issues'
import Membership from './Pages/Membership'
import IdGenerator from './Pages/IdCard'
import LeadershipDirectory from './Pages/LeadershipDir'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/issues' element={<Issues/>} />
        <Route path='/membership' element={<Membership/>} />
        <Route path='/IdCard' element={<IdGenerator/>} />
        <Route path='/Leadership' element={<LeadershipDirectory/>} />
      </Routes>
    </>
  )
}

export default App
