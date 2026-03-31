import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes> 
      </main>
     
    </div>
  )
}

export default App
