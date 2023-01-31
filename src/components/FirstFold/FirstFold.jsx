import React from 'react';
import TimeBound from '../time-bound/timeBound.component';
import QuoteDate from '../quoteDate/quoteDate';
import Acknowledgement from '../Acknowledgement/acknowledgement';
import UserLife from '../TimeComponents/userLife/userLife';

const FirstFold = () => {
  return (
    <div>
        <QuoteDate />
        <TimeBound />
        <UserLife />
        <Acknowledgement />
       
    </div>
  )
}

export default FirstFold