import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
// import Application from './components/Application'
import Auth from './pages/Auth'
import Goal from './pages/Goal'
import GuidePage from './pages/GuidePage'
import NotFound from './pages/Notfound'
import Graphical from './components/Graphical'

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/register' element={<Auth register={true} />}/>
    <Route path='/login' element={<Auth login={true}/>}/>
    <Route path='/*' element={<NotFound/>}/>
    
        <Route path='/' element={
          <>
             <Header/>
            <Home/>
          </>
          }/>
        <Route path='/goalsetting' element={
         <>
             <Header/>
            <Goal/>
         </>
          }/>
        <Route path='/guides' element={
         <>
             <Header/>
            <GuidePage/>
         </>}/>
        <Route path='/dashboard' element={
           <>
             <Header/>
            <Graphical/>
           </>}/>
        </Routes>
    </>
  )
}

export default App
