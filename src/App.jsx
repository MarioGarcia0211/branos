import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapaProcesos from './components/MapaProcesos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapaProcesos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
