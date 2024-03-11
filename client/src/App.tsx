import { Route, Routes } from 'react-router-dom'
import './App.css'
import List from './components/List/List'
import Post from './components/Post/Post'
import AppBar from './components/AppBar/AppBar'

function App(): JSX.Element {
  return (
    <>
    <AppBar/>
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='/post/:id' element={<Post/>}/>
    </Routes>
    </>
  )
}

export default App
