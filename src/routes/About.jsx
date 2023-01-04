import React from 'react'
import "./about.styles.scss"
import PronounceButton from '../components/pronounce/prononceBtn';

const About = () => {
  const date = new Date();
  const dateString = date.toDateString();


  return (
    <div>
      <div className="about__container">
        <div className="about__date">{dateString}</div>
        <h2>memento mori</h2>
        <p className="pronounce">/mɪˌmɛntəʊ ˈmɔːrʌɪ,mɪˌmɛntəʊ ˈmɔːri <PronounceButton word="memento mori" /></p>
        <p>
          Memento mori is a Latin phrase that means <strong><span className='die'>"remember that you must die."</span></strong> It is a reminder to focus on the present and to make the most of one's time, as death is inevitable.
        </p>
        <p>
          The concept of memento mori has a long history and has been used in a variety of contexts, including art, literature, and philosophy. It has often been used as a reminder to live a virtuous and meaningful life, to not take one's time on earth for granted, and to be prepared for death.
        </p>
        <p>
          In art and literature, memento mori motifs and themes are common, often taking the form of skulls, hourglasses, or other symbols of mortality. These serve as a reminder to the viewer or reader to consider their own mortality and to make the most of their time.

        </p>
        <p>
          Memento mori is still a relevant and important concept today, as it serves as a reminder to appreciate the present moment and to live a fulfilling and meaningful life.
        </p>
      </div>
    </div>
  )
}

export default About