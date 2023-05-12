import React from 'react';
import "./stoicHabits.scss";
import fire from "../../assets/images/photo.svg";
import one from "../../assets/images/numbers/1.svg";
import two from "../../assets/images/numbers/1.svg";
import three from "../../assets/images/numbers/1.svg";
import four from "../../assets/images/numbers/1.svg";
import five from "../../assets/images/numbers/1.svg";





const StoicHabits = () => {
  return (
    <div className='quote-container stoic-habits'>
        <div className="stoic-habits-title">
            <h2>FIVE SIMPLE HABITS</h2>
            <div className="img0">
                <h5>FOR EACH OF US</h5>
                <img src={fire} alt="fire burning" className='fire-glowing'/>
            </div>
        </div>
        <div className="habit-blocks">
            <div className="habit-blocks-container">
                <img src="" alt="" />
                <h4>Adopt a Gratitude Mindset</h4>
                <p>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
            <div className="habit-blocks-container">
                <h4>Adopt a Gratitude Mindset</h4>
                <p>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
            <div className="habit-blocks-container">
                <h4>Adopt a Gratitude Mindset</h4>
                <p>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
            <div className="habit-blocks-container">
                <h4>Adopt a Gratitude Mindset</h4>
                <p>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
            <div className="habit-blocks-container">
                <h4>Adopt a Gratitude Mindset</h4>
                <p>
                    Each day, take a moment to reflect on the things you are grateful for. It can be as simple as appreciating a beautiful sunset, a warm cup of coffee, or the support of loved ones. Gratitude shifts your focus to the positive aspects of life and fosters contentment.
                </p>
            </div>
        </div>
    </div>
  )
}

export default StoicHabits