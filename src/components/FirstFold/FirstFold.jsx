import React from 'react'
import TimeBound from '../time-bound/timeBound.component'
import QuoteDate from '../quoteDate/quoteDate'
import Acknowledgement from '../Acknowledgement/acknowledgement'
const FirstFold = () => {
  return (
    <div>
        <QuoteDate />
        <TimeBound />
        <Acknowledgement />
    </div>
  )
}

export default FirstFold