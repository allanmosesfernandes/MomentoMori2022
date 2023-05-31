import {React, useState} from 'react';
import TimeBound from '../time-bound/timeBound.component';
import QuoteDate from '../quoteDate/quoteDate';
import Acknowledgement from '../Acknowledgement/acknowledgement';
import UserLife from '../TimeComponents/userLife/userLife';
import quotes from "../../assets/quotes";
import Symbolism from '../symbolism/symbolism';
import Introduction from '../Introduction/Introduction';
import StoicHabits from '../StoicHabits/stoicHabits';
import SocialShare from '../SocialShare/socialShare';
const FirstFold = () => {


  return (
  <>
      <Introduction />
      <QuoteDate /> 
      <SocialShare />
      <TimeBound />
      <StoicHabits />
      <Symbolism />
      <Acknowledgement /> 
  </>


  )
}

export default FirstFold