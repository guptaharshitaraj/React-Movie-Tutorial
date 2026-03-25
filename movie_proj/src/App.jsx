import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      {<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes> }
        
    </div>
  )
}

export default App
