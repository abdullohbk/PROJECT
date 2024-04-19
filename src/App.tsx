
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
     <h1 className='text-center m-4 text-primary'>Hello User</h1>
     <Outlet/>
    </>
  )
}

export default App
