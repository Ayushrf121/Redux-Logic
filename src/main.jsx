import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <BrowserRouter>
    <Navbar/>
    <App/>
    <Footer/>
  </BrowserRouter>
 </Provider>
)
