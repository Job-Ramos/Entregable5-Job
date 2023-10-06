

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/pokedexIdPage/HomePage'
import PokedexPage from './pages/pokedexIdPage/PokedexPage'
import PokedexIdPage from './pages/pokedexIdPage/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {


  return (
    <div className='container__body'>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route element={<ProtectedRoutes />}>
       <Route path='/pokedex' element={<PokedexPage/>}/>
       <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
       </Route>
      </Routes>
    </div>
  )
}

export default App
