import './App.css';
import  Header from './components/Header/Header'
import Lodu from './routes/About';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import React from 'react'
import About from './routes/About';
import FirstFold from './components/FirstFold/FirstFold';
import Auth from './routes/auth/auth';
const App = () => {
  return (
    
   <Routes>
    <Route path='/' element={<Header />}>
      <Route index element={<FirstFold />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<Auth />} />
    </Route>
   </Routes>
  )
}


export default App;
