import './App.css';
import  Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import React from 'react'
import About from './routes/About';
import FirstFold from './components/FirstFold/FirstFold';
import PageNotFound from './components/404/PageNotFound';

const App = () => {
  return (

  <Routes>
    <Route path='/' element={<Header />}>
      <Route index element={<FirstFold />} />
      <Route path='about' element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
  )
}


export default App;
