// rfce
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Chart from './pages/Chart';




function App() {
  
  return (
    <Router>
      <div className='bg-[#363636] min-h-screen text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chart/:country' element={<Chart/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App



