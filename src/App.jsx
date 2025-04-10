import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapaProcesos from './components/MapaProcesos';
import DesarrolloOrg from './components/DesarrolloOrg';
import Navbar from './components/Navbar';
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container-fluid'>
        <Routes>
          <Route path="/" element={<MapaProcesos />} />
          <Route path="desarrollo-organizacional" element={<DesarrolloOrg />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
