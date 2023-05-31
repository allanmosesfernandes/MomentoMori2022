import React from 'react';
import { SocialsContainer } from './StyledSocials';
import ShareIcon from "../../assets/images/Share-icon.svg";

const SocialShare = () => {
  return (
    <SocialsContainer className='quote-container'>
      <div>
        <h2>Share: <img src={ShareIcon} alt="Share Icon"/></h2>
      </div>
      <div>
        
      </div>
    </SocialsContainer>
  )
}

export default SocialShare