import React from "react";
import ProductHunt from "../ProductHuntBadge/productHunt";
import "./introduction.scss";
const Introduction = () => {
  return (
    <>
      <div className="quote-container introduction">
        <h1>Daily Stoic Reminders</h1>
        {/*   
        /***
         * When I wrote this, only God and I understood what I was doing
         * Now, God only knows
         */
        /***
         */}
        <p className="Typewriter__wrapper">
          With roots in ancient Greece, the philosophy of Stoicism offers a
          unique approach to lifes challenges that promises to awaken the
          virtuous, resilient, and wise within you. Its teachings continue to
          inspire and guide people today, inviting them to embark on a journey
          of self-discovery and personal growth.
          <br /> <br /> The Stoics believed that time is one of the most
          valuable resources that we have, and that we should use it wisely.
          They believed that life is short, and that every moment counts.
          Therefore, they advocated for living in the present moment and
          focusing on what is most important.&nbsp;
          <ProductHunt />
        </p>
        <a href="#wisdom">
          <div className="scroll-down">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Introduction;
