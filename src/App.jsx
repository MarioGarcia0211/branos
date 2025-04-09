import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapaProcesos from './components/MapaProcesos';
import Prueba from './components/Prueba';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapaProcesos/>}/>
        <Route path="/prueba" element={<Prueba/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
