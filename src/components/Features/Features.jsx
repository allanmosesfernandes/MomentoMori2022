import React from 'react';
import "./features.scss";

const Features = () => {
  return (
    <div className="quote-container features">
        <div className="date-container">
            <h3>Upcoming Features v2</h3>
        </div>
I        <div className="features-list">
            <ul>
                <li className='underline'>Store user-life span in local storage.</li>
                <li>Sign in using Google.</li>
                <li>Night Mode.</li>
                <li>Bookmark your favorite quotes.</li>
                <li>Share favorite quotes on social media.</li>
            </ul>
        </div>
        <div className="feature-suggestion-box">
            <form id="user-suggestion" name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

                    <h4>Got a suggestion?</h4>
                    <textarea id="suggestion" name="message" rows="4" cols="50" placeholder='Please share your valuable thoughts and ideas for features that you would like to see in the future. Your input will help us to better serve your needs and enhance your experience. '>
                         
                    </textarea>
                <button className="button-28" type="submit">SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Features