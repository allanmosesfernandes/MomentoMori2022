import React, { useState } from 'react';
import { SocialsContainer } from './StyledSocials';
import ShareIcon from "../../assets/images/Share-icon.svg";

const SocialShare = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }



  return (
    <SocialsContainer className='quote-container'>
      <div>
        <h2>Share: <img src={ShareIcon} alt="Share Icon"/></h2>
      </div>
      <div>
        <ul>
          <li>
            <p className="number">01</p>
            <p onClick={handleCopyLink}>
              {copied ? "Copied!" : "Copy Link"}
            </p>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </SocialsContainer>
  )
}

export default SocialShare