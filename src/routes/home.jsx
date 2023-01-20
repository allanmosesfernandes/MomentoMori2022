import React from 'react'
import Header from '../components/Header/Header'
import QuoteDate from '../components/quoteDate/quoteDate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  return (
    <div>
        <QuoteDate />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
    </div>
  )
}

export default Home