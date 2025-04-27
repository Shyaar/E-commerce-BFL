import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Adds from './components/ui/Add';
import Footer from './components/Footer';






function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App
