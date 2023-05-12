import React from 'react';
import "./stoicHabits.scss";
import fire from "../../assets/images/photo.svg";
import one from "../../assets/images/numbers/1.svg";
import two from "../../assets/images/numbers/2.svg";
import three from "../../assets/images/numbers/3.svg";

const StoicHabits = () => {
  return (
    <div className='quote-container stoic-habits'>
        <div className="stoic-habits-title">
            <h2>THREE SIMPLE HABITS</h2>
            <div className="img0">
                <h5>FOR EACH OF US</h5>
                <img src={fire} alt="fire burning" className='fire-glowing'/>
            </div>
        </div>
        <div className="habit-blocks">
            <div className="habit-blocks-container">
                <img src={one} alt="number one" className='habit-number'/>
                <h4>Practise Gratitude </h4>
                <p>
                    <span className="habit-quote">
                        When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.— Marcus Aurelius
                    </span>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
            <div className="habit-blocks-container">
                <img src={two} alt="number one" className='habit-number'/>
                <h4>Take Wondering Walks</h4>
                <p>
                    <span className="habit-quote">
                        We should take wandering outdoor walks so that the mind might be nourished and refreshed by the open air and deep breathing.— Seneca
                    </span>
                        Walking serves as a powerful tool in the Stoic philosophy. It embodies the Latin phrase "Solvitur Ambulando," meaning "it is solved by walking." Walking not only provides physical exercise but also serves as a means to practice mindfulness, be present, and act with intention. By engaging in walking, we can effectively process thoughts and emotions, heightening our awareness of our own consciousness.
                </p>
            </div>
            <div className="habit-blocks-container">
                <img src={three} alt="number one" className='habit-number'/>
                <h4>Make time to read</h4>
                <p>
                    <span className="habit-quote">
                        Reading, I hold, is indispensable — primarily, to keep me from being satisfied with myself alone, and besides, after I have learned what others have found out by their studies, to enable me to pass judgment on their discoveries and reflect upon discoveries that remain to be made. Reading nourishes the mind and refreshes it when it is wearied with study; nevertheless, this refreshment is not obtained without study. — Seneca
                    </span>
                    Reading is a powerful tool for self-improvement and personal growth. It expands your knowledge, stimulates your mind, and exposes you to different perspectives. By making time for regular reading, you can nourish your intellect, enhance your understanding of the world, and cultivate a lifelong love for learning.
                </p>
            </div>
        </div>
    </div>
  )
}

export default StoicHabits