import React from 'react'
import stoic from '../../assets/stoic.json'
const Date = () => {
  let quote = stoic.filter((quote) => {
    const date = new Date();
    const month = date.getMonth();
    return quote.monthIndex == month;
  },

  return (
    <div>Date</div>
  )
}

export default Date