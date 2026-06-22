import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Issues from './Pages/Issues'
import Membership from './Pages/Membership'
import IdGenerator from './Pages/IdCard'
import LeadershipDirectory from './Pages/LeadershipDir'
import Activities from './Pages/Activities'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsConditions from './Pages/TermsConditions'
import Gallery from './Pages/Gallery'
import Downloads from './Pages/Downloads'
import Footer from './Components/Footer'
import WhatsAppButton from './Components/WhatsAppButton'
import AnnouncementBar from './Components/AnnouncementBar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/IdCard' element={<IdGenerator />} />
          <Route path='/Leadership' element={<LeadershipDirectory />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/downloads' element={<Downloads />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
