import React from 'react'
import "./about.styles.scss"
import PronounceButton from '../components/pronounce/prononceBtn';

const About = () => {

  return (
    <div>
      <div className="about__container">
        
        <h2>memento mori</h2>
        <p className="pronounce">/mɪˌmɛntəʊ ˈmɔːrʌɪ,mɪˌmɛntəʊ ˈmɔːri <PronounceButton word="memento mori" /></p>
        <p>
          Memento mori is a Latin phrase that means <strong><span className='ddddd'>"remember that you must die."</span></strong> It is a reminder to focus on the present and to make the most of one's time, as death is inevitable.
        </p>
        <p>
            This website is dedicated to providing daily inspiration and guidance from the ancient philosophy of Stoicism. The goal is to help you navigate the challenges of modern life by sharing the wisdom of the Stoics, who believed in the power of self-control and the ability to rise above adversity.
        </p>
        <p>
          Dark imagery such as skulls is used across the website to remind ourselves of the concept of memento mori, which is the reminder of our own mortality. The skull is a powerful symbol that serves as a reminder of the preciousness of life and the importance of living in the present moment. Memento mori is a powerful concept that has been embraced by the Stoics, who believed that by constantly reminding ourselves of our mortality, we can live our lives more fully and appreciate the time we have.
        </p>

        <p>
          The Stoics believed that by embracing the concept of memento mori, we can learn to detach ourselves from the fleeting pleasures of life and focus on what is truly important. They believed that by accepting our own mortality, we can develop a sense of inner peace and find true fulfillment in life.
        </p>

        <p>
          By sharing these teachings, I hope to inspire you to live a more meaningful and fulfilling life.
        </p>
       
        {/* <p>
          The concept of memento mori has a long history and has been used in a variety of contexts, including art, literature, and philosophy. It has often been used as a reminder to live a virtuous and meaningful life, to not take one's time on earth for granted, and to be prepared for death.
        </p>
        <p>
          In art and literature, memento mori motifs and themes are common, often taking the form of skulls, hourglasses, or other symbols of mortality. These serve as a reminder to the viewer or reader to consider their own mortality and to make the most of their time.

        </p>
        <p>
          Memento mori is still a relevant and important concept today, as it serves as a reminder to appreciate the present moment and to live a fulfilling and meaningful life.
        </p> */}
      </div>
    </div>
  )
}

export default About