import './App.css';
import  Header from './components/Header/Header'
import Lodu from './routes/About';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import React from 'react'
import About from './routes/About';

const App = () => {
  return (
    
   <Routes>
    <Route path='/' element={<Home />}>
      <Route path='/about' element={<About />} />
    </Route>
   </Routes>
  )
}


export default App;
