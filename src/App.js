import './App.css';
import  Header from './components/Header/Header'
import Lodu from './routes/About';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Shop from './components/Shop/Shop';
import React from 'react'
import About from './routes/About';
import FirstFold from './components/FirstFold/FirstFold';
import Auth from './routes/auth/auth';
import Checkout from './routes/checkout/checkout';
import Features from './components/Features/Features';
import PageNotFound from './components/404/PageNotFound';

const App = () => {
  return (
    
   <Routes>
    <Route path='/' element={<Header />}>
      <Route index element={<FirstFold />} />
      <Route path='about' element={<About />} />
      <Route path='sign-in' element={<Auth />} />
      <Route path='shop' element={<Shop />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='features' element={<Features />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
   </Routes>
  )
}


export default App;
