import {React, useState} from 'react';
import TimeBound from '../time-bound/timeBound.component';
import QuoteDate from '../quoteDate/quoteDate';
import Acknowledgement from '../Acknowledgement/acknowledgement';
import UserLife from '../TimeComponents/userLife/userLife';
import quotes from "../../assets/quotes";
import Symbolism from '../symbolism/symbolism';
const FirstFold = () => {


  return (
  <>
      <QuoteDate /> 
      <Symbolism />
      <TimeBound />
      <UserLife />
      <Acknowledgement />   
  </>


  )
}

export default FirstFold