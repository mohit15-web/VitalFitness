import Home from './components/Home'
import Exercise from './components/Exercise'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/exercise' element={<Exercise/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App