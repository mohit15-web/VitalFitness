import Home from './components/Home'
import Exercise from './components/Exercise'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/exercise' element={<Exercise/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App