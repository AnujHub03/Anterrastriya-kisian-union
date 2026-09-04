
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './Pages/LanguageContext.jsx'
import { AuthProvider } from './Pages/AuthCont.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <LanguageProvider>
  <BrowserRouter>
  
    <App />
    
 </BrowserRouter>
 </LanguageProvider>
 </AuthProvider>

)
