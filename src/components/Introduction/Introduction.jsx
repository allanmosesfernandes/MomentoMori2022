import React from 'react'
import Typed from "typed.js";

import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';

import "./introduction.scss";
const Introduction = () => {

  return (
    <>
    
      <div className='quote-container introduction'>
      <h1>Daily Stoic Reminders</h1>

      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString(`With roots in ancient Greece, the philosophy of Stoicism offers a unique approach to life's challenges that promises to awaken the virtuous, resilient, and wise within you. Its teachings continue to inspire and guide people today, inviting them to embark on a journey of self-discovery and personal growth.`)
          .callFunction(() => {
            this.secondTypewriter.start();
          })
          .start();
        }}
        options={{
          delay: 50,
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          this.secondTypewriter = typewriter;
        }}
        ref={(typewriter) => {
          this.secondTypewriter = typewriter;
        }}
        options={{
          delay: 50,
        }}
      >
        The Stoics believed that time is one of the most valuable resources that we have, and that we should use it wisely. Stoics believed life to be fleeting and every moment valuable. They encouraged individuals to embrace the present moment and concentrate on what matters, rather than waste time on insignificant pursuits.
      </Typewriter>


      <div className="scroll-down">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>

    </div>

    </>

  )
}

export default Introduction